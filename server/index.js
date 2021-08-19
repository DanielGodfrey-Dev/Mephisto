const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const https = require('https');
const GoogleAPI = require('../google.js');
const { send } = require('process');
const port = 3001;

//______________________________________________________________
app.use(express.static(__dirname + '/../dist'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.listen(port, () => {
    console.log(`Mephisto is alive on localhost port ${port}`);
})
//______________________________________________________________

// app.post('/submit', chatLogic.randomResponse);
app.post('/search', (req, res) => {
    let searchTerm = req.body.userText;
    let API_KEY = GoogleAPI.GoogleAPI;
    let CONTEXT_KEY = GoogleAPI.ContextKey;

    let url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}`;

    https.get(`${url}`, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
        console.log('we are here');
        process.stdout.write(d);
    });

    }).on('error', (e) => {
    console.error(e);
    });

    res.send('data retrieved')
})