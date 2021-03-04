const express = require('express');
const app = express();
const mongoose = require('mongoose');
const apiRoute = require('./routes/api');
const bodyParser = require('body-parser')
require('dotenv/config');

app.use(bodyParser.json());

app.use('/api', apiRoute);

app.get('/', (req, res) => {
    res.send('Hello');
});




mongoose.connect(process.env.DB_HIDE, { useNewUrlParser: true }, () =>
    console.log('dbconnect'));

app.listen(3000);