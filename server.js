"use strict";

const express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {res.send('Hey Bois')});

app.listen(port);
