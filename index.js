'use strict';

const express = require('express');
const requestIp = require('request-ip');
const app = express();

app.use(requestIp.mw());

const port = process.env.PORT || 4000;

app.get('/', function (req, res) {
    const ip = req.clientIp;
    res.end('Your IP address is ' + ip);
});

app.listen(port);
