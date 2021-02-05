const express=require("express");
const mysql=require("mysql");
const bodyParser=require("body-parser");
const port=8000;
const app=express();
app.use(bodyParser.json());


let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb"
  })
app.get('/customers',(req,res) => {
    con.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
      });
})

app.get('/customers/:id',(req,res) => {
    con.query("SELECT * FROM customers WHERE id=?",[req.params.id],function(err,result){
        if (err) throw err;
        res.send(result);
    })
})

app.delete('/customers/:id',(req,res) => {
    con.query("DELETE FROM customers WHERE id=?",[req.params.id],function(err,result){
        if (err) throw err;
        res.send(result);
    })
})
app.post('/customers',(req,res) => {
    var reqBody=req.body;
    console.log(reqBody);
    con.query("INSERT INTO customers (name, address) VALUES (?,?)",[reqBody.name,reqBody.address],function(err,result){
        if (err) throw err;
        console.log('successfully inserted');
    })
})
app.put('/customers/:id',(req,res) => {
    var reqBody=req.body;
    con.query("UPDATE customers SET name=?,address=?",[reqBody.name,reqBody.address],function(err,result){
        if (err) throw err;
        res.send(result);
    })
})

app.listen(port,() => {
    console.log(`listening on port 'http://localhost:${port}`);
})
