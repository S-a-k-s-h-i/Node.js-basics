const express=require("express");
const app=express();
const port=8080;
const path=require("path")
const hbs=require("hbs");
const { dirname } = require("path");
const templatePath=path.join(__dirname,'/templates/views');
const publicPath=path.join(__dirname,'/public');
const partialPath=path.join(__dirname,'templates/partials');
// setting view engine
app.set('view engine','hbs');
app.set('views',templatePath);
app.use(express.static(templatePath));
app.use(express.static(publicPath));
hbs.registerPartials(partialPath);

app.get('/',(req,res) => {
    res.render('index',{name:"sakshi",age:22});
})
app.get('/about',(req,res)=>{
    res.render("about");
})
app.get('/contact',(req,res) => {
    res.sendFile(publicPath+'/contact.html');
})
app.get('/about/*',(req,res) => {
    res.render("404",{
        errorcomment:"This About Us page not found!!!!!!!", 
    })
})
app.get('*',(req,res) => {
    res.render('404',{
        errorcomment:"Page not found!!!!!!!",
    });
})

app.listen(port,() => {
    console.log(`litening on http://localhost:${port}`);
})