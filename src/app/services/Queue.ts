import {createQueue} from 'kue'
import * as Sentry from '@sentry/node'
import jobs from '../jobs'

const Queue = createQueue({
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  }
})

Queue.process(jobs.MailJob.key, jobs.MailJob.handle)

Queue.on('error', Sentry.captureException)

export default Queue
