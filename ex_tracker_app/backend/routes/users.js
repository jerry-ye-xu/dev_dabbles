// Create route using Express
const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
	// Mongo method that gets all Users from MongoDB
	User.find()
		// res.json = returns something in JSON format
		.then(users => res.json(users))
		.catch(err => res.status(400).json('Error: ' + err));
	}
);

router.route('/add').post((req, res) => {
	// New username is part of the request body
	const username = req.body.username;

	const newUser = new User({username})

	// save method for MongoDB
	newUser.save()
	.then(() => res.json('User added!'))
	.catch(err => res.status(400).json('Error: ' + err));
	}
);

module.exports = router;

