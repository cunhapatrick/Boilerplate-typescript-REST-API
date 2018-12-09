[[ args[0] == "-h" ]] && echo "Script to mount the boilerplate automatic, input 2 arguments, 1 = project_name, 2 = online_repository_uri" && exit 1

[[ $# -lt 2 ]] && echo "Insuficient argument number" && exit 1

args=("$@")

rm -rf package-lock.json
yarn

cd ..
mv boilerplate-api-nodejs backend

cd backend/config/env
cp .env.example .env
git remote rm origin
git remote add origin ${args[1]}

cd ../..

json -I -f package.json -e 'this.name="'+${args[0]}+'"'
json -I -f package.json -e 'this.description=""'

echo "Boilerplate mounted with success"

node server.js



