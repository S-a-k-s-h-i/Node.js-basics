const mysql=require("mysql");
var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database:"chatsDatabase"
  });
  
  mysqlConnection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
//     var sql = "CREATE TABLE chats (id INT AUTO_INCREMENT PRIMARY KEY,sender VARCHAR(255),recipient VARCHAR(255),senderMsg TEXT,receiverMsg TEXT)";
//     mysqlConnection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
  });
module.exports=mysqlConnection;