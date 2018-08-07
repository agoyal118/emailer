//figure out what set of credentials to return
//everything in config is for the backend
//bc any file u import into react is accessible
//to the outside world
//backend makes use of common js modules
//which is characterized by require
//in es2015 you have to import all files before
//making use of any logic

if (process.env.NODE_ENV === 'production') {
	// we are in production - return the prod set of keys
	module.exports = require('./prod');
} else {
	// we are in development - return the dev keys!!!
	module.exports = require('./dev');
}