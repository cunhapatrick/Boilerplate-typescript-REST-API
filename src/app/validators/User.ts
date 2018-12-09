import * as joi from 'joi'

export default {
  body: {
    name: joi.string().required(),
    email: joi
      .string()
      .email()
      .required(),
    password: joi
      .string()
      .required()
      .min(6)
  }
}
