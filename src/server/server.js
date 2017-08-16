const express = require('express');
const app = express();

const mongo = require('mongodb').MongoClient;

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