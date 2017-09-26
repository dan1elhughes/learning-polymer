const prpl = require('prpl-server');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;

const apiRouter = require('./app/router');

const app = express();

// API routing
app.use('/api', apiRouter);

// Static file routing
const productionHandler = () => prpl.makeHandler('build', require('./polymer'));
const developmentHandler = () => (req, res) => res.sendFile(path.join(__dirname, 'index.html'));

const isProduction = process.env.NODE_ENV === 'production';

const handler = isProduction ? productionHandler : developmentHandler;

if (process.env.NODE_ENV !== 'production') {
	app.use('/bower_components', express.static('bower_components'));
	app.use('/src', express.static('src'));
}

app.get('/*', handler());

app.listen(port, () => console.log(`Listening on ${port}`));
