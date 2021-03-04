const express = require('express');

const app = express();




app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/api', (req, res) => {
    res.send('Welcome to your api');
});
app.listen(3000);