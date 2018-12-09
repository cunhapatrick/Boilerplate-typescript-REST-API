import {config} from 'dotenv'
config({ path: 'src/config/env/.env' })
import server from './config/server'
server.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server is running on ${
      process.env.NODE_ENV
    } enviromnent on uri http://localhost:${process.env.PORT || 3000}`
  )
})
