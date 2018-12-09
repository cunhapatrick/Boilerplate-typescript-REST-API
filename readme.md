# BoilerPlate Typescript API Nodejs/Express

## Description

This boilerPlate have all the primary configurations to start a nodejs API RESTFULL with Express and MongoDB with the initial settings
using typescript language

## [Repository URL](https://cunhapatrick.github.io/boilerplate-nodejs/)

## Initial env Settings

run `yarn mount aplication_name Online_Repository_URL`
run `yarn appSecretGenerate keyword` , copy the hash inside .env variable APP_SECRET

## Database Configuration (MongoDB)

- Follow one of those instructions
  1. [MongoDB](https://www.mongodb.com/download-center/community)
  - Follow the instructions to download and install on your local machine
  - run `mongo` on terminal to iniciate mongo shell
  - run on mongo shell `use database_name`
  - `db.create({user: "username",pwd:"userpassword",roles:"readWrite",db:"databasename"})`, remember to change the `username`,`pwd` and `db` values
  - Now set the credential values of the mongodb inside src/config/env/.env
  2. [Docker](https://hub.docker.com/)
  - Create a account and follow the instructions to download the docker cli to your local machine
  - After the download and install follow those [instructions](https://hub.docker.com/_/mongo/)
  - Create a database and it's user
  - Now set the credentials inside src/config/env/.env
  3. [Mlab](https://mlab.com/home)
  - Create a account
  - Create a database and a database user
  - set the credentials inside src/config/env/.env
  4. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  - Create a account
  - Create a database and a database user
  - set the credentials inside src/config/env/.env

## Redis Configuration

- Follow one of those instructions

1. [Docker](https://hub.docker.com/)

- Follow those [instruction](https://hub.docker.com/_/redis/)
- Set the credentials to .env file

2. [Redis Server](https://redis.io/download)

- Download and configure redis to your local machine
- Set the .env file with the credentials (Obs: The .env.example already have the default credentials)

## Uncomment Database

goto src/config/server.js and uncomment `this.database`

## Mail Configuration

To development a recommend use [mailtrap](https://mailtrap.io), make a account and get the smtp credentials and instance in the respective enviromnent variables

## Exception Error Config

To production error monitoring, I used (Sentry)[https://sentry.io], create a account and create a project, after that get the credentials data and put inside .env respective variables

## Init Server

run `yarn`, after that run `yarn prod`
Obs: Use the ./dist directory on production enviromnent
