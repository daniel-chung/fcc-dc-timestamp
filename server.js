// /server.js
'use strict';


// Load packages ---------------------------------------------------------------
var express = require('express');
var morgan = require('morgan');


// Setup node/express app ------------------------------------------------------
var app = express();
var routes = require('./app/index.js');
var port = process.env.PORT || 8080;
app.use(morgan('dev')); // log every request to the console


// Load routes -----------------------------------------------------------------
routes(app);


// HTML routes -----------------------------------------------------------------
app.use('/view', express.static(process.cwd() + '/view'));
app.use('/libraries', express.static(process.cwd() + '/libraries'));

// Start server ----------------------------------------------------------------
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});


// EOF -------------------------------------------------------------------------
