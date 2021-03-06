const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const chatLogic = require('./chatLogic/basic.js')
const port = 3000;

//______________________________________________________________
app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Mephisto is alive on localhost port ${port}`);
})
//______________________________________________________________

app.post('/submit', chatLogic.randomResponse);
