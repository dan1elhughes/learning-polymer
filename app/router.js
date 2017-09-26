const express = require('express');

module.exports = express.Router()
	.get('/tasks', (req, res) => {
		setTimeout(() => res.send([
			{ value: 'Do this', done: true },
			{ value: 'Do that', done: false },
			{ value: 'Do something else', done: false },
			{ value: 'Load from the API', done: true },
		]), 1000);
	});
