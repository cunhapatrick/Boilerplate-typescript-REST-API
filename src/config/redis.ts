import redis from 'redis'
const { env } = process

export default redis.createClient(env.REDIS_PORT, env.REDIS_HOST)
