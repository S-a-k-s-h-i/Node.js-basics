const express=require("express");
const app=express();
const port=8080;
app.get("/",(req,res) => {
    // res.send("<h1>welcome home page</h1>");
    res.write("<h1>welcome home page</h1>");
    res.write("<h1>welcome home page.!!!!Hello Users</h1>");
    res.send();
})
app.get("/about",(req,res)=>{
    res.send("About Page");
})
app.get("/contact",(req,res) => {
    res.send("Contact Us Page");
})
app.get("/temp",(req,res) => {
    // res.send([{
    //    id:1,
    //    name:"sakshi",
    // },
    // {
    //     id:1,
    //     name:"sakshi",
    //  },
    //  {
    //     id:1,
    //     name:"sakshi",
    //  }]);

    res.send([{
       id:1,
       name:"sakshi",
    },
    {
        id:1,
        name:"sakshi",
        address:undefined,
     },
     {
        id:1,
        name:"sakshi",
        address:null,
     }]);
})
app.listen(port,() => {
   console.log(`listening on http://localhost:${port}`);
})