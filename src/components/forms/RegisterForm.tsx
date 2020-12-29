import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Input } from "..";
import { END_POINTS } from "../../constants";
import { useFetchLazy, useForm, useNotify } from "../../hooks";
import { Wrapper } from "../../styles/registerForm";
import { APISuccessResponse } from "../../types/fetch";
import { registerInputSchema } from "../../validators";

const INITIAL_VALUES = {
  email: "",
  password: "",
};
export type RegisterInitialValues = typeof INITIAL_VALUES;
const RegisterForm = () => {
  const history = useHistory();
  const { notify } = useNotify();
  const { formValues, handleChange, handleSubmit, errors } = useForm(
    INITIAL_VALUES,
    {
      validationSchema: registerInputSchema,
    }
  );
  const [register, { loading }] = useFetchLazy<APISuccessResponse<{}>>(
    END_POINTS.AUTH.REGISTER
  );

  const onSubmit = (formValues: RegisterInitialValues) => {
    register({
      method: "POST",
      body: formValues,
    })
      .then((res) => {
        if (res.success) {
          notify.success("Successfully registered, you may log in now.");
          history.push("/login");
        }
      })
      .catch((err) => {
        notify.error(err.message);
      });
  };

  return (
    <Wrapper noValidate onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        label="Email"
        fullWidth
        name="email"
        onChange={handleChange}
        error={errors?.["email"] || ""}
        value={formValues.email}
        disabled={loading}
      />
      <Input
        type="password"
        label="Password"
        fullWidth
        name="password"
        onChange={handleChange}
        error={errors?.["password"] || ""}
        value={formValues.password}
        disabled={loading}
      />
      <Button loading={loading} type="submit">
        Sign up
      </Button>
      <Link to="/login">Already have an account? Sign in.</Link>
    </Wrapper>
  );
};

export default RegisterForm;
