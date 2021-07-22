"use strict";
/* eslint-disable */

var express = require('express');
const axios = require("axios").create({baseUrl:"https://api.commerce.coinbase.com/charges"})
var router = express.Router();

// creating charges
router.post('/', async (req, res) =>{
 try {
   const resp= await axios.post("posts",{
    "Content-Type": "application/json",
    "X-CC-Api-Key": "377db512-71d1-48df-94fb-bbc62ee483d8" ,
    "X-CC-Version": "2018-03-22" ,
   body:{
     "name": "The Sovereign Individual",
     "description": "Mastering the Transition to the Information Age",
     "local_price": {
       "amount": req.body.price,
       "currency": "USD"
     },
     "pricing_type": "fixed_price",
   }
   })
   res.status(201).json({status:"success",resp:resp.data})
 }catch {
    res.status(500).json({status:"faild, error occured"})
 }
});

module.exports = router;