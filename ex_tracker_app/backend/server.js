const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
// require('dotenv').config({ path: '.env' });

// Create Express server
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

console.log(process.env.ATLAS_URI);
mongoose.connect(
	uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

const usersRouter = require('./routes/users');
const exercisesRouter = require('./routes/exercises');

app.use('/users', usersRouter);
app.use('/exercises', exercisesRouter);

// routes.initialize(app);

app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});