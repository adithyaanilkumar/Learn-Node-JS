const express = require('express')
const path = require('path')
const rootDir = require('../utils/homedir')
const router = express.Router()
var product = []
router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});
router.post('/add-product',(req,res,next)=>{
    console.log("In prod");
    console.log("logging input"+req.body.title);
    product.push(req.body.title);
    console.log("product",product);
    res.redirect('/admin/add-product');
});
exports.router = router
exports.product = product