// here im gonne practice  what i learn about backends like what is prams and many more 

const express = require("express");

const port = 3000;

let aap = express();

// here im gonna add some middleware

aap.use("/profile", function (req, res, next) {
    console.log("hello mr sarfaraz sheikh i am here to help you and also to make it sure you dont put your self in any truble")
    next()
})

aap.use("/profile/:MunnaKaNaam", function (req, res, next) {
    console.log(`hello mr ${req.params.MunnaKaNaam} i am sarfaraz sheikh .. nice too meet you. how's your day `)
    next()
})


aap.set("view engine", "ejs")

// here is real Router  also knows as url ;

aap.get("/", function (req, res) {
    // res.send("hello mr sarfaraz sheikh i am a ceo of tital company ... nice to meet you ")
    throw Error("the error happend")
})






aap.get("/profile", function (req, res) {
    // res.send("me - ooh sorry... but whats your name ?")
    // res.send(`ops i forgot to introduce my self i am ${req.params.MunnaKaNaam}`)
    res.render(`secon`)
})




aap.use(function errorHandler(err, req, res, next) {
        if (res.headersSent) {
            return next(err)
        }
        res.status(500)
        res.render('error', { error: err })
    })


aap.listen(port, "0.0.0.0", () => {
    console.log('mr sarfaraz your sever is started thank you to ')
})