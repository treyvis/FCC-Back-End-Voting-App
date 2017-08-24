const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongo = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const config = require('./config.json');
const mongoURI = 'mongodb://' + config.user + ':' + config.password + '@ds123351.mlab.com:23351/fcc-voting-app';

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");3
	next();
})

app.use(bodyParser.json());

app.get('/', (req,res) => {
	res.json({message: "Success"});
})

app.get('/api/polls', (req, res) => {
	mongo.connect(mongoURI, (err, db) => {
		if (err) throw err;
		console.log('Connected to database');
		db.collection('polls').find().toArray((err, docs) => {
			console.log(docs);
			res.json(docs);
		});
	});
});

app.get('/api/polls/:id', (req,res) => {
	console.log(req.params);
	mongo.connect(mongoURI, (err, db) => {
		if (err) throw err;
		console.log('Connected to database');
		db.collection('polls').find(ObjectID(req.params.id)).next((err, doc) => {
			if (err) throw err;
			console.log(doc);
			res.json(doc);
		});
	});
})

app.post('/api/polls', (req, res) => {
	console.log(req.body);
	res.send('You found me');
});

app.listen(3001, () => {
	console.log('Listening on port 3001');
})