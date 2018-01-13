"use strict";

const express = require('express');
var app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {res.send('Hey Bois')});

app.listen(port);
