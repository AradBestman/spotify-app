import Joi from "joi";
import validation from "./validation";

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-])[A-Za-z\d!@#$%^&*-]{6,}$/
      )
    )
    .messages({
      "string.pattern.base": "the password should be...",
      "string.empty": "Password must be filled up",
    })
    .min(2)
    .max(20)
    .required(),
});

const validateLogin = (inputToCheck) => validation(loginSchema, inputToCheck);

export { validateLogin };
