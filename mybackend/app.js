"use strict";
/* eslint-disable */

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var chargesRouter=require('./routes/charges');

var app = express();

// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/charges',chargesRouter);

// error handler
app.use(function(err, req, res, next) {
  res.status(500).json({err:"serverside Error"});

});

// module.exports = app;
app.listen(process.env.PORT || 7000)
