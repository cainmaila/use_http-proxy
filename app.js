"use strict";
var express = require('express');
var httpProxy = require('http-proxy');
var app = express();
var port = process.env.PORT || 8000;
var proxy = httpProxy.createProxyServer();
app.use("/app2", function (req, res) {
    proxy.web(req, res, { target: 'http://127.0.0.1:8010' });
});
app.use("/", function (req, res) {
    proxy.web(req, res, { target: 'http://127.0.0.1:8010' });
});
app.listen(port, function () {
    console.log("run 8000!!");
});
var app2 = express();
app2.use("/", function (req, res) {
    console.log(req);
    res.send("app2!!");
});
app2.listen(8010, function () {
    console.log("app2 run 8010!!");
});
var app3 = express();
app3.use("/", function (req, res) {
    console.log(req);
    res.send("app3!!");
});
app2.listen(8020, function () {
    console.log("app2 run 8020!!");
});
