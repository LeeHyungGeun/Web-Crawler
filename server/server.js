const http = require('http');
const express = require('express');
const app = express();

var configs = require('./configs/server.config.js');

app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen(configs.server.port, configs.server.host, function() {
    console.log('listening');
});