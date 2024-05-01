require('dotenv').config(); // Load .env file

// Importing modules
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const bodyParser = require('body-parser');

// Importing controllers
const homeController = require('./controller/homeController');

// Creating express app
const app = express();

// Middlewares
app.use(express.static(__dirname + '/public')); // Set public folder as static
app.use(bodyParser.urlencoded({ extended: true })); // Parse application/x-www-form-urlencoded
app.use(session({
    secret: 'demo', // Secret key (Random generated string)
    resave: false,
    saveUninitialized: true
})); // Session

// Set view engine
app.use(expressLayouts);
app.set('layout', 'layouts/master'); // Set master layout
app.set('view engine', 'ejs');

// Routes
app.get('/', homeController.render);

// Start server
app.listen(80, () => {
    console.log('Server is running on port 80');
});