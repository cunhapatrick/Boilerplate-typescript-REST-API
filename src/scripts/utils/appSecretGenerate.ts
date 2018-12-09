import bcrypt from 'bcryptjs'

const { argv } = process

if (argv.length !== 3) {
  throw new Error('Please, input password as argument!')
}

const senha: string = argv[2]
const hash: string = bcrypt.hashSync(senha)

console.log('Generate hash...')
console.log(
  'APP SECRET CREATED!!!'
)
console.log('hash:',hash)
