//next is a function we call when our middleware is complete
//we can use next to move on to the next middleware

module.exports = (req, res, next) => {
	if (!req.user) {
		return res.status(401).send({ error: 'You must log in!' });
	}
	next();
};