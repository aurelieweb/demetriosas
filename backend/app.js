const express = require('express');
const bodyParser = require('body-parser');

  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const app = express();

app.use(express.json());

app.use('/devisForm, devisFormRouter');


module.exports = app;