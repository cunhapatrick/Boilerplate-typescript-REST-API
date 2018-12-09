import { connect, connection } from 'mongoose'
const { env } = process

const uri: string = `mongodb://${env.DB_USER}:${env.DB_PASS}@${env.DB_HOST}:${
  env.DB_PORT
}/${env.DB_NAME}`

interface configObj {
  db?: string
  dbOptions?: object
}

const config: configObj = {
  db: uri,
  dbOptions: {
    useNewUrlParser: true,
    useCreateIndex: true,
    // autoIndex: false, // Don't build indexes (verificar com carinho para ganhar performance em production)
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 30000, // Give up initial connection after 30 seconds
    socketTimeoutMS: 60000, // Close sockets after 60 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  }
}

// let db = mongoose.createConnection(config.db,config.dbOptions)
connect(
  config.db,
  config.dbOptions
)
export default connection
