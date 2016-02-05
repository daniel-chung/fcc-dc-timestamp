// /app/index.js
'use strict';

// Set up ----------------------------------------------------------------------
var path = process.cwd();
var TimestampServer = require(path + '/app/timestamp.server.js');


// Main index function ---------------------------------------------------------
module.exports = function (app) {

  // Server side controllers ---------------------------------------------- //
	var timestampServer = new TimestampServer();

  // HOME PAGE (with login links) ----------------------------------------- //
	app.route('/')
		.get(function(req, res) {
			res.sendFile(path + '/view/index.html');
		});

	// Error page
	app.route('/error')
		.get(function(req, res) {
			res.send('This is an error page');
		});


	// API CALLS ------------------------------------------------------------ //
	app.route('/:apiInput')
		.get(timestampServer.convert);

};


// EOF -------------------------------------------------------------------------
