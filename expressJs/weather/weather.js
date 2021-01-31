const express=require("express");
const app=express();
const requests=require("requests");
const port=8080;

app.get("/temp",(req,res) => {
    requests(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.name},in&APPID=32c2417b467a4ad26cccfe65bdea6d09`)
    .on('data',(chunk) => {
        const objData=JSON.parse(chunk);
        const arrData=[objData]
        console.log(arrData);
        console.log(`Temperature of ${arrData[0].name} is ${arrData[0].main.temp}`);
        res.send(`Temperature of ${arrData[0].name} is ${arrData[0].main.temp}`);
    })
    .on('end', (err) => {
    if (err) return console.log('connection closed due to errors', err);
    res.end();
    });
})
app.listen(port,() => {
    console.log(`listening on port http://localhost:${port}`)
})