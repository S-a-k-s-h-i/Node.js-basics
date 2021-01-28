const express=require("express");
const app=express();
const port=8080

// MIDDLEWARE function mylogger
app.use(mylogger);
function mylogger(req,res,next){
    console.log("LOGGED");
    console.log(req.originalUrl);
    next();
}
function auth(req,res,next){
    if(req.query.admin==='true'){
        req.admin=true;
        next()
    }else{
        res.send('No Auth');
    }
}

app.get('/',(req,res) => {
    res.send('Hello Middleware!!!');
})
app.get('/users',auth,(req,res) => {
    console.log(`user admin is ${req.admin}`);
    res.send("User Page");
})


// MIDDLEWARE function requestTime
// var requestTime=function(req,res,next){
//     req.requestTime=Date.now();
//     next();
// }
// app.use(requestTime);
// app.get('/',(req,res) => {
//     var responseText="Hello World!!!!<br>";
//     responseText+="<small>Requested at"+req.requestTime+"</small>";
//     res.send(responseText);
// })

app.listen(port,() => {
    console.log(`litening on http://localhost:${port}`);
})