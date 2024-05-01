# Node.js Web Template

## Description
This is a template for a Node.js web application. It includes a basic server setup, a basic routing setup, and a basic view setup.
This template is still in development and will be updated as I learn more about Node.js. Currently, the template does not include a database setup, but I plan to add that in the future.

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

## Environment Variables
This template uses environment variables to store sensitive information. To use environment variables, create a `.env` file in the root directory of the project and add the following variables.
Example can be found in the `.env.example` file.