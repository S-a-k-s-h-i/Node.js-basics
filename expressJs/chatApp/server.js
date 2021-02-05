const express=require("express");
const hbs=require("hbs");
const path=require("path");
const bodyParser=require("body-parser");
const mysqlConnection=require('./connection');
const app=express();
const port=3000;
app.use(express.json());
const staticPath=path.join(__dirname,'/views');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('view engine','hbs');
app.use(express.static(staticPath));
app.get('/',(req,res) => {
    res.render("index");
})

let allMessages=[];

app.get('/messages',(req,res) => {
    // res.send(allMessages);
    mysqlConnection.query("SELECT * FROM chats",function(err,result){
        if (err) throw err;
        res.send(result);
    })
})

// Adding a message
app.post('/messages',(req,res) => {
    let senderconv=req.body;
    console.log('......',senderconv);
    // allMessages.push(senderconv)
    // res.send(senderconv)
    mysqlConnection.query("INSERT INTO chats (sender,recipient,senderMsg,receiverMsg) VALUES (?,?,?,?)",
       [senderconv.sender,senderconv.recipient,senderconv.senderMsg,senderconv.receiverMsg],function(err,result){
        if (err) throw err;
        res.send(result);
    })
})

// getting all the messages of a particular user
app.get('/messages/:sender',(req,res) => {
    const sender_messages=allMessages.filter(m => m.sender==req.params.sender);
    if(!sender_messages)res.status(404).send('not found');
    res.send(sender_messages);
})

// Edit the message
app.put('/messages/:id',(req,res) => {
    const message=allMessages.find(m => m.id==req.params.id);
    if(!message)res.status(404).send('not found');
    message.msg=req.body.msg;
    res.send(message);
})

// delete the message
app.delete('/messages/:id',(req,res) => {
    // const message=allMessages.find(m => m.id==req.params.id);
    // if(!message)res.status(404).send('not found');
    // const index=allMessages.indexOf(message);
    // allMessages.splice(index,1)
    // res.send(message);
    mysqlConnection.query("DELETE FROM chats where id=?",[req.params.id],function(err,result){
        if(err) throw err;
        res.send(result);
    })
})

app.listen(port,() => {
    console.log(`Listening on port http://localhost:${port}`);
})