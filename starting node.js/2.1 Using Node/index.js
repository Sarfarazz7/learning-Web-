const munna = require("fs");

// munna.writeFile("saifu.css" , " /* this is cascadin style sheat */" , (err)=>{
//   if(err) throw(err)
//     console.log("the file creation is complete thanku for waiting")
// })

munna.readFile("./saifu.css" , "utf8" , (err , data) =>{
  if (err) throw(data)
    console.log(data)
} )