const express = require('express'); //common js modules on server side
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express(); //using express() to create an object. will listen for incoming requests


//wiring up middleware
app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, //30 days in milliseconds
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

//require returns a function
//and then we immediately pass in
//app as a parameter to the function
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	// like our main.js file or main.css file
	app.use(express.static('client/build'));

	// Express will serve up the index.html file
	// if it doesn't recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}


const PORT = process.env.PORT || 5000;
app.listen(PORT);