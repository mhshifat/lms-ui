import Joi from "joi";

export const registerInputSchema: Record<string, Joi.StringSchema> = {
  email: Joi.string()
    .lowercase()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
};

export const loginInputSchema: Record<
  string,
  Joi.StringSchema | Joi.BooleanSchema
> = {
  email: Joi.string()
    .lowercase()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  rememberMe: Joi.boolean().optional(),
};
