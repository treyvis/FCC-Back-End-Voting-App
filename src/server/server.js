const express = require('express');
const app = express();

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