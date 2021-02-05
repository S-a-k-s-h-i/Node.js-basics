const mysql=require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database:"mydb"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // con.query('CREATE DATABASE mydb', function (err, result) {
    //     if (err) throw err;
    //     console.log('Database Created');
    //   });
    // let sql="ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    // con.query(sql,function(err,data){
    //     if(err) throw err;
    //     console.log('Table created');
    // })
    let sql="INSERT INTO customers (name,address) VALUES ?";
    var values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
      ];
    con.query(sql,[values],function(err,result){
        if(err) throw err;
        console.log(result);
        console.log('No of records inserted '+result.affectedRows);
    })
    
});