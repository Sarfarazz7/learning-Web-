const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

// here im gonna st server
mongoose.connect("mongodb://127.0.0.1:27017/power");

// here is mongoose.Schema
const usershema = mongoose.Schema({
  username : String , 
  password : String , 
  secret : String 
}) ; 
usershema.plugin(plm);

const usermodel = mongoose.model("user" , usershema);

module.exports = usermodel ;


