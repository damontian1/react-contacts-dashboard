var express = require('express');
var app = express();

// requires expressJS to use nodeJS to serve your website structure, so index.html will run from the root of folder and map to "/"
app.use(express.static(__dirname + '/'));

// Serves the website using Heroku default port or port 8080
app.listen(process.env.PORT || 8080);