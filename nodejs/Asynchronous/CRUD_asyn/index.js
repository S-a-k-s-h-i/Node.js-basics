const fs=require("fs");
// fs.writeFile("bio.text","Welcome>>>>Hello Users",(err) => {
//     console.log("file created");
// })
fs.appendFile("bbio.txt","Learning node....",(err) => {
    console.log("Data appended");
});
// fs.rename("bio.txt","mybio.txt",(err) => {
//     console.log("renamed");
// })