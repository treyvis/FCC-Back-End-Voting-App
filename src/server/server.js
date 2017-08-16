const express = require('express');
const app = express();

const mongo = require('mongodb').MongoClient;
const config = require('./config.json');
const mongoURI = 'mongodb://' + config.user + ':' + config.password + '@ds123351.mlab.com:23351/fcc-voting-app';

mongo.connect(mongoURI, (err, db) => {
	if (err) throw err;
	console.log('Connected to database');
	db.collection('polls').find().toArray((err, docs) => {
		console.log(docs);
	});
});

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
})

app.get('/', (req,res) => {
	res.json({message: "Success"});
})

app.listen(3001, () => {
	console.log('Listening on port 3001');
})