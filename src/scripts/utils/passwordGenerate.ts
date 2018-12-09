import bcrypt from 'bcryptjs'
const { argv } = process

const { APP_SECRET } = process.env

if (argv.length !== 3) {
  throw new Error('Please, input the password as argument!')
}

if (!APP_SECRET || APP_SECRET === '') {
  throw new Error('APP_SECRET is not defined on the enviromnent file (.env)')
}

const senha:string = argv[2]

console.log('Generate hash...')

const hash:string = bcrypt.hashSync(senha + APP_SECRET)

console.log('Hash: ', hash)
