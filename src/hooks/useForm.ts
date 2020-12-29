import Joi from "joi";
import { ChangeEvent, FormEvent, useState } from "react";
import { capFirstLetterInWord } from "../lib";

interface Options {
  validationSchema: Record<
    string,
    Joi.StringSchema | Joi.BooleanSchema | Joi.NumberSchema
  >;
}

const useForm = <T>(initialValues: T, options: Options) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string> | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    setFormValues({
      ...formValues,
      [name]: value === "on" ? checked : value,
    });

    options.validationSchema[name]
      ?.validateAsync(value)
      .then(() => {
        if (errors) {
          delete errors[name];
          setErrors(errors);
        }
      })
      .catch((err) => {
        if (err.name === "ValidationError") {
          const newErrors = { ...errors };
          newErrors[name] = err.message.replace(
            /"([^"]*)"/g,
            capFirstLetterInWord(name)
          );
          setErrors(newErrors);
        }
      });
  };

  const handleSubmit = (callback: Function) => async (e: FormEvent) => {
    try {
      e.preventDefault();
      options.validationSchema &&
        (await Joi.object(options.validationSchema).validateAsync(formValues, {
          abortEarly: false,
        }));
      callback(formValues);
    } catch (err) {
      if (err?.details) {
        const errors: any[] = err.details.map((obj: any) => ({
          message: obj.message.replace(
            /"([^"]*)"/g,
            capFirstLetterInWord(obj.path[0])
          ),
          path: obj.path[0],
        }));

        setErrors(
          errors.reduce((acc, current) => {
            acc[current.path] = current.message;
            return acc;
          }, {})
        );
      }
    }
  };

  const reset = (values?: T) => {
    values && setFormValues(values);
  };

  const setValue = (name: string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return {
    errors,
    formValues,
    handleChange,
    handleSubmit,
    reset,
    setValue,
  };
};

export default useForm;
