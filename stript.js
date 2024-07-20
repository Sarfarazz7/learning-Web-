const express = require("express");
const { middleware } = require("stylis");

const port = 3000

let a = express();

// middleware
a.use(function (req, res, next) {
    console.log("the rout is change")
    next()
})

// main backend

a.get("/", function (req, res) {
    res.send("hello mr sarfaraz sheikh i am your supervisor and today im gonna follow ... to make it sure you dont get in any problem")
})


a.get ("/profile" , function(req , res){
    res.send(`dear sarfaraz i see your profile and im quite impresed about it ... you make such a nice profile...`)
})

a.listen(port , "0.0.0.0" , ()=>{
    console.log(`here your sever is started on this port ${port}`)
} )