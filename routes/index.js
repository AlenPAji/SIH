var express = require('express');
var router = express.Router();

/* GET home page. */
var userregister=require("../Helpers/userreg")

router.get('/', function(req, res, next) {
  res.render('home')
});

router.get("/dashboard",(req,res)=>{
  userregister.seependingconnection().then((response)=>{
    console.log(response)
    res.render("dashboard",{connections:response})
  })
  
})


router.post("/receive-alert",(req,res)=>{
console.log(req.body)
})









module.exports = router;
