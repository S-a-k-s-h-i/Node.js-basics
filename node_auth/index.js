const express=require("express");
const bodyParser=require("body-parser");
const user = require("./routes/user");
const InitiateMongoServer = require("./config/db");

//Initiate Mongo Server
InitiateMongoServer();

const app = express();

//PORT No
const port = process.env.port || 8000;

// Middleware
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.json({message:"API Working"});
})

app.use("/user", user);


app.listen(port,() => {
   console.log(`Listening on port http://localhost:${port}`);
})