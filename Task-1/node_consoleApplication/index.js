const parse=require('csv-parse');
const fs=require('fs');
const result=[];
fs.createReadStream('employees.csv').pipe(
    parse({
        delimiter:','
    })
)
.on('data',(data)=>result.push(data))
.on('end',()=>{
   let sendMail=require('./nodemail.js');
   sendMail.nodemail(result);
});









   