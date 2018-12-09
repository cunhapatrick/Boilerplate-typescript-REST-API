import * as joi from 'joi'

export default {
  body: {
    email: joi
      .string()
      .email()
      .required(),
    password: joi.string().required()
  }
}
