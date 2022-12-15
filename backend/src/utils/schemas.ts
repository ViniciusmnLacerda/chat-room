import Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  username: Joi.string().required(),
  image: Joi.string(),
})

export {
  loginSchema,
  signupSchema,
};