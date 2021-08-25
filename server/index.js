const express = require('express');
const app = express();
const https = require('https');
const GoogleAPI = require('../google.js');
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

app.post('/search', (req, res) => {
    let searchTerm = req.body.userText;
    let API_KEY = GoogleAPI.GoogleAPI;
    let CONTEXT_KEY = GoogleAPI.ContextKey;

    let url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}`;

    let GoogleData = '';
    let FinalData = [];

    https.get(`${url}`, (response) => {
        console.log('statusCode:', response.statusCode);
        console.log('headers:', response.headers);

        response.on('data', (d) => {
            GoogleData += d;
        });

        response.on('end', function() {
            let parsed = JSON.parse(GoogleData);
            for (var i = 0; i < parsed.items.length; i++) {
                var item = parsed.items[i];
                console.log(item);
                FinalData.push(item);
              }

            console.log('sending data');
            res.send(FinalData);
            
        })
        .on('error', (e) => {
            console.error(e);
        });
    });
});