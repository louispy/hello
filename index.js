const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.status(200).json({ "message": "Hello World!" }));

app.listen(port, console.log('App listening on port:', port));
