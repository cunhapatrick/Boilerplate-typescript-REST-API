import {createTransport} from 'nodemailer'
import * as path from 'path'
import * as exphbs from 'express-handlebars'
import * as hbs from 'nodemailer-express-handlebars'

const transport = createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
})
transport.use(
  'compile',
  hbs({
    viewEngine: exphbs(),
    viewPath: path.resolve(__dirname, '..', 'views', 'emails'),
    extName: '.hbs'
  })
)

export default transport
