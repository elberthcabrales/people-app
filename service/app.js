const express = require('express');
require('dotenv').config();
const app = express();
const services = require('./services');
const people = require('./modules/people');
const {init} = services.redis;
init({options:{}});
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4000');
    next();
});

app.get('/people', people(services).get);

module.exports = app;



