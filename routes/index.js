var express = require('express');
var router = express.Router();
const usermodel = require("./users");
const passport = require("passport");
const localstrategy = require("passport-local"); 

passport.use(new localstrategy(usermodel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/profile" , isLoggedIn ,function(req , res ){
  res.render("profile");
});

router.post("/register" , function(req , res , next) {
  var userdata = new usermodel({
    username : req.body.username , 
    secret : req.body.secret ,
  });

  usermodel.register(userdata , req.body.password)
    .then(function(registereduser){
      passport.authenticate("local")(req , res , function(){
        res.redirect("/profile")
      });
    });

});

router.post("/login" ,passport.authenticate("local" , {
  successRedirect : "/profile" ,
  failureRedirect : "/"
}) ,function(req , res){})


router.get("/logout" , function(req , res , next){
  req.logOut(function(err){
    if (err) return next(err);
    res.redirect("/");
  });
});

function isLoggedIn(req , res , next){
  if(req.isAuthenticated()){
    return next()
  };
  res.redirect("/")
}

module.exports = router;
