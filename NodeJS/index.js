const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');

const cors = require('cors');

var informationController = require('./controllers/infomationController.js');
var app = express();

app.use(bodyParser.json());

app.use(cors({ origin: 'https://localhost:4200' }));


app.listen(3000, () => console.log('server started at port:3000'));

app.use('/information', informationController);