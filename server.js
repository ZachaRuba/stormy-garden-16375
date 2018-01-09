"use strict";

const express = require('express');
var app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {res.send('Hey Bois')});

app.listen(port);
