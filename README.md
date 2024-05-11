# Node.js Web Template

## Description
This is a template for a Node.js web application. It includes a basic server setup, a basic routing setup, and a basic view setup.
This template is still in development and will be updated as I learn more about Node.js.

## Installation
To install this template, clone the repository and run `npm install` in the root directory.

```bash
git clone https://github.com/CoolerProYT/Nodejs-Web-Template.git
```

After cloning the repository, run the following command in the root directory of the project.

```bash
npm install
```

To start the server, run the following command in the root directory of the project.

```bash
npm run start
```

To stop or delete the server, run the following command in the root directory of the project.

```bash
pm2 stop process_id/name
```
or
```bash
pm2 delete process_id/name
```
Note: You can find the process_id/name by running the following command.

```bash
pm2 list
```

## Database
This template uses MySQL as the database. To use MySQL, create a database and add the database information to the `config/config.json` file.

Please ensure that your database is running before starting the server.

## Environment Variables
This template uses environment variables to store sensitive information. To use environment variables, create a `.env` file in the root directory of the project and add the following variables.
Example can be found in the `.env.example` file.

## Models
This template use MySQL as the database. To use MySQL, create a database and add the database information to the `config/config.json` file.

To generate a model, run the following command in the root directory of the project.

This command will generate a migration file and a model file.

```bash
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```

Run the following command to migrate the model to the database.

```bash
npx sequelize-cli db:migrate
```

## Seeders
This template uses seeders to populate the database with data. To generate a seeder, run the following command in the root directory of the project.

```bash
npx sequelize-cli seed:generate --name demo-user
```

Run the following command to seed the database.

```bash
npx sequelize-cli db:seed:all
```