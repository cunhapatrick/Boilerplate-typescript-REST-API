import * as express from 'express'
const app = express()
// handle validation fields
import * as validate from 'express-validation'
// handle async errors
import * as handle from 'express-async-handler'
// auth middleware
import authMiddleware from './app/middlewares/auth'

// list of controllers and validations
import controllers from './app/controllers'
import validators from './app/validators'

// app = express
app.route('/').get((req, res) => res.send('teste'))

// General error handle,wrap async controller inside handle function
/**
 * General Model
 */
app
  .route(`/a/:collection/:id`)
  .get(handle(controllers.ModelController.show))
  .put(handle(controllers.ModelController.update))
  .delete(handle(controllers.ModelController.destroy))

app
  .route(`/a/:collection`)
  .get(handle(controllers.ModelController.index))
  .post(handle(controllers.ModelController.store))

/**
 * User Create
 */

app
  .route('/users')
  .post(validate(validators.User), handle(controllers.UserController.store))

/**
 * Session
 */

app.post(
  '/sessions',
  validate(validators.Session),
  handle(controllers.SessionController.store)
)

app.use(authMiddleware)
/**
 * Mail
 */
app.get('/mail', handle(controllers.MailController.store))

export default app