# Backend

> This project is based on Microsoft's [Typescript Node Starter](https://github.com/microsoft/TypeScript-Node-Starter) repo. I modified their code to migrate from MongoDB to Sequelize and get rid of irrelevant features.

## Getting started

1. Create a new Postgres database (install Postgres if you don't have it).
2. Make a copy of `.env.example` and call it `.env`. Fill in your database connection details.
3. Run `yarn install` to install the project dependencies.
4. Run `yarn start` to start the server with hot reloading.

## Relevant commands

`yarn start` - Start the backend server with hot reloading  
`yarn test` - Run all unit tests using Jest  
`yarn lint` - Run the linter

## Notes

This repo uses `sequelize.sync()` instead of migrations, which is convenient when first starting a project and converging on a DB schema, but is not suitable for production. See the [docs on migrations](https://sequelize.org/master/manual/migrations.html) when it is time.
