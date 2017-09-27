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

app.post('/api/mypolls', (req, res) => {
	console.log(req.body.uid);
	mongo.connect(mongoURI, (err, db) => {
		if (err) throw err;
		console.log('Connected to mypolls database');
		db.collection('polls').find({uid:{$eq: req.body.uid}}).toArray((err, docs) => {
			if (err) throw err;
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
	mongo.connect(mongoURI, (err, db) => {
		if (err) throw err;
		console.log('Connected to database');
		db.collection('polls').update({"_id": ObjectID(req.body.id)}, {$set: req.body.update}, ()=>{
			res.json(req.body);
		});
	});
});

app.post('/api/newpoll', (req, res) => {
	console.log(req.body);
	mongo.connect(mongoURI, (err, db) => {
		if (err) throw err;
		console.log('Connected to database');
		db.collection('polls').insert(req.body, (err, result) => {
			if (err) throw err;
			console.log(result.insertedIds[0]);
			res.json({id: result.insertedIds[0]});
		});
	});
});

app.post('/api/login', (req, res) => {
	console.log(req.body);
	res.send('login called server');
});

app.post('/api/newUser', (req, res) => {
	console.log(req.body);
	mongo.connect(mongoURI, (err, db) => {
		if (err) throw err;
		console.log('Connected to database');
		db.collection('users').insert(req.body, (err, result) => {
			if (err) throw err;
			console.log(result.insertedIds[0]);
			res.send(result.insertedIds[0]);
		});
	});
})

app.listen(3001, () => {
	console.log('Listening on port 3001');
})