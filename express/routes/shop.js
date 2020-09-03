const express = require('express');
const path = require('path');
const rootDir = require('../utils/homedir')
const adminData = require('./admin'
)
const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log("in shop",adminData.product);
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports = router