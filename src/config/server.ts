import * as express from 'express'
import Youch from 'youch'
import * as Sentry from '@sentry/node'
import validate from 'express-validation'
import * as cors from 'cors'
import db from './mongoose'

class App {
  
  public express: express.Application
  public isDev: Boolean
  
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'
    
    this.sentry()
    //this.database()
    this.middleware()
    this.routes()
    this.exception()
  }
  
  private sentry (): void {
    // init sentry watch
    Sentry.init({ dsn: process.env.SENTRY_DSN })
  }
  
  private database () : void {
    db.once('open', () => console.log('DATABASE IS ONLINE'))
    db.on('error', err => console.log(err))
  }

  private middleware () : void {
    // middleware activation to sentry handler
    this.express.use(Sentry.Handlers.requestHandler())
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes () : void {
    require(`../routes.js`)
  }

  private exception () : void {
    // On production enviromnent active the sentry watch handler
    if (process.env.NODE_ENV === 'production') {
      this.express.use(Sentry.Handlers.errorHandler())
    }
    // check if error is a validation Object
    this.express.use(async (err, req, res, next) => {
      if (err instanceof validate.ValidationError) {
        return res.status(err.status).json(err)
      }

      // if not production use Youch error treatment
      if (process.env.NODE_ENV !== 'production') {
        const youch = new Youch(err)

        return res.json(await youch.toJSON())
      }

      // general error handler
      return res
        .status(err.status || 500)
        .json({ error: 'Internal Server Error' })
    })
  }
}

export default new App().express
