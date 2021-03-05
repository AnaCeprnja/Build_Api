require('dotenv').config()



const express = require('express');
const app = express();
const mongoose = require('mongoose');

//connect us to the db
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('you are connected to the db'))

app.use(express.json())
const quotesRouter = require('./routes/quotes')
app.use('/quotes', quotesRouter)





app.listen(3000, () => console.log('You are listening to port 3000'))