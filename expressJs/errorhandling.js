const express=require("express");
const app=express();

app.get('/',(req,res) => {
  throw new Error("BROKEN");
})
app.listen(8080);