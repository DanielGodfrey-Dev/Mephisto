const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.static(__dirname + '/../dist'));

app.listen(port, () => {
    console.log(`Mephisto is alive on localhost port ${port}`);
})