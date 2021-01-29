const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;

app.get('/', (req, res) => {
    res.send('we exist in this cyberspace.');
})

app.listen(port, () => {
    console.log(`Mephisto is aware on localhost port ${port}`);
})