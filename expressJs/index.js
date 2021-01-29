const express=require("express");
const app=express();
const path=require("path");
const port=process.env.PORT || 8000;
const staticPath=path.join(__dirname,'/public');
app.use(express.static(staticPath));

app.get('/',(req,res) => {
res.send("Welcome")
})
app.get('/api/courses/:id',(req,res) => {
    res.send(req.params.id);
})
app.get('/api/posts/:year/:month',(req,res) => {
    res.send(req.query);
})
app.listen(port,() => {
    console.log(`listening on http://localhost:${port}`);
})
