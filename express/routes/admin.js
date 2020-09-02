const express = require('express')
const router = express.Router()

router.get('/route',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name ="message"><button type = "submit">submit</button></form>');
})
router.post('/product',(req,res,next)=>{
    console.log("In prod");
    console.log(req.body);
    res.redirect('/');
})
modules.exports = router