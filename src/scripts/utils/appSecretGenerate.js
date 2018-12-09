const bcrypt = require('bcryptjs')

const { argv } = process

if (argv.length !== 3) {
  throw new Error('Por favor passe a senha como argumento!')
}

const senha = argv[2]
const hash = bcrypt.hashSync(senha)

console.log('Gerando hash...')
console.log(
  'APP SECRET CRIADO!!!',
  'Por favor cole o hash abaixo dentro do respectivo DEV_APP_SECRET || APP_SECRET(DEV = develop)'
)
console.log(hash)
