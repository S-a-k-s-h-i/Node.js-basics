const express=require("express");
const app=express();
const port=8080

// MIDDLEWARE function mylogger
// var mylogger=function(req,res,next){
//     console.log("LOGGED");
//     next();
// }
// app.use(mylogger);
// app.get('/',(req,res) => {
//     res.send('Hello Middleware!!!');
// })


// MIDDLEWARE function requestTime
var requestTime=function(req,res,next){
    req.requestTime=Date.now();
    next();
}
app.use(requestTime);
app.get('/',(req,res) => {
    var responseText="Hello World!!!!<br>";
    responseText+="<small>Requested at"+req.requestTime+"</small>";
    res.send(responseText);
})

app.listen(port,() => {
    console.log(`litening on http://localhost:${port}`);
})