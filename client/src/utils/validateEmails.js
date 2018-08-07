// components return objects or classes
// which have caps to start
// validateEmails returns a function
// so small case to start

const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {
	const invalidEmails = emails
	.split(',')
	.map(email => email.trim())
	.filter(email => re.test(email) === false)

	if (invalidEmails.length) {
		return `These emails are invalid: ${invalidEmails}`;
	}

	return;
};