/// <reference path="typings/tsd.d.ts" />

import express = require('express');
var httpProxy = require('http-proxy');
let app = express();
let port = process.env.PORT || 8000;
let proxy = httpProxy.createProxyServer();

app.use("/app2",function(req, res){
    proxy.web(req, res, { target: 'http://127.0.0.1:8010'});
});

app.use("/",function(req, res){
    //res.send("OK!!");
    proxy.web(req, res, { target: 'http://127.0.0.1:8010'});
});

app.listen(port,function(){
    console.log("run 8000!!");
});

let app2 = express();

app2.use("/",function(req, res){
    console.log(req);
    res.send("app2!!");
});

app2.listen(8010,function(){
    console.log("app2 run 8010!!");
});

let app3 = express();

app3.use("/",function(req, res){
    console.log(req);
    res.send("app3!!");
});

app2.listen(8020,function(){
    console.log("app2 run 8020!!");
});
