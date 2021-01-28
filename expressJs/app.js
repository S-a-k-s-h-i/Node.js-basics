const express=require("express");
const app=express();
const port=8080;
app.get('/',(req,res)=>{
    res.send('Hello from Express');
})
app.get('/about',(req,res)=>{
    res.send("about page");
})

app.listen(port,()=>{
  console.log(`app listening at http://localhost:${port}`);
})