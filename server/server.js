const http = require('http');
const express = require('express');
const app = express();

const fs = require('fs');

var configs = require('../configs/server.config.js');

let Search = require('./Services/Search.js');
let file = require('./Utils/file.js');
let Filter = require('./Services/Filter.js');

app.get('/', function(req, res) {
    let search = new Search();
    let filter = new Filter();
    res.send('hello world');
    let url = req.query.url || 'https://stg-jp1-join.worksmobile.com/kr/joinup/basicInfo';
    console.log(url);
    search.get(url).then((res) => {
        file.save(res.body, url);
        // console.log(filter.isContains(res.html(), '가입'));

    });
});
app.listen(configs.server.port, configs.server.host, function() {
    console.log('listening');
});