var express = require('express');
var router = express.Router();

var userregister=require("../Helpers/userreg")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/gg",(req,res)=>{
  res.render("userlogin");
})


router.get("/req-connection",(req,res)=>{
  res.render("req-connection");
})

router.post("/req-connection",(req,res)=>{
  userregister.register(req.body).then((response)=>{
    console.log(response)
    res.redirect("/")

  })
})





router.get("/dashboard",(req,res)=>{
  res.render("usersdash");
})
module.exports = router;
