"use strict";
/* eslint-disable */

var express = require('express');
var path = require('path');
var fs=require('fs');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var chargesRouter=require('./routes/charges');
const { dirname } = require('path');

var app = express();

// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public\crypto-payment-processer')));
app.use(cors());
app.use('/', (req,res)=>{
  fs.createReadStream(__dirname + 'public/crypto-payment-processer/index.html').pipe(res);
});
app.use('/charges',chargesRouter);
app.use('*',(req,res)=>{
  fs.createReadStream(__dirname + 'public/crypto-payment-processer/index.html').pipe(res);
})

// error handler
app.use(function(err, req, res, next) {
  res.status(500).json({err:"serverside Error"});

});

// module.exports = app;
app.listen(process.env.PORT || 7000)
