import Joi from "joi";

export default Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "400|'email' isn't valid.",
    "any.required": "400|'email' is required.",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "400|'password' must be longer than 6 characters",
    "any.required": "400|'password' is required.",
  }),
});
