const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');
const mongo = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const config = require('./src/server/config.json');
const mongoURI = 'mongodb://' + config.user + ':' + config.password + '@ds123351.mlab.com:23351/fcc-voting-app';

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());

app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(3002, () => {
	console.log('Listening on port 3002');
});