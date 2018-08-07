const passport = require('passport');

//route handler. req is the object representing incoming request.
// res is object representing the outgoing response
//app.get('/', (req, res) => {
//	res.send({ bye: 'buddy' });
//});

module.exports = app => {
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get(
		'/auth/google/callback',
		passport.authenticate('google'),
		(req, res) => {
			res.redirect('/surveys');
		}
	);

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	app.get('/api/current_user', (req, res) => {
		//res.send(req.session); // used by passport
		res.send(req.user);
	});
};