"use strict";
/* eslint-disable */

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
const chargesRouter=require('./routes/chrages')
const { response } = require('express');

var app = express();

// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/charges',chargesRouter);

// error handler
app.use(function(err, req, res, next) {
  res.status(500).json({err:"serverside Error"});

});

// module.exports = app;
app.listen(5000, function(){
  console.log("app is running on port 5000");
});
