"use strict";
/* eslint-disable */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({status:"Wel come to Crypto Payment Processor automated deployement is enabled :) "});
});

module.exports = router;
