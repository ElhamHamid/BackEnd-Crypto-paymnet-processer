"use strict";
/* eslint-disable */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Wel Come To Crypto Payment Processers :)")
});

module.exports = router;
