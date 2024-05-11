require('dotenv').config(); // Load .env file

// Importing modules
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const bodyParser = require('body-parser');
const modelLoader = require('./middleware/modelLoader');
const webRoutes = require('./route/web');
const apiRoutes = require('./route/api');

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

app.use(modelLoader); // Load models

// Set view engine
app.use(expressLayouts);
app.set('layout', 'layouts/master'); // Set master layout
app.set('view engine', 'ejs');

// Mount the routers
app.use('/', webRoutes);
app.use('/api', apiRoutes);

// Redirect to home page if route not found
app.get('*', function(req, res){
    res.redirect('/')
});

// Start server
app.listen(80, () => {
    console.log('Server is running on port 80');
});