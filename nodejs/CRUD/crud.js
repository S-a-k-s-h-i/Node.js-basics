const fs=require("fs");
// fs.writeFileSync('node.txt',"Node.js is an open-source, cross-platform, back-end JavaScript runtime environment");
// fs.appendFileSync('node.txt',"that runs on the Chrome V8 engine ");
// const readFile=fs.readFileSync('node.txt').toString();
const readFile=fs.readFileSync('nodeJs.txt','utf-8');
console.log(readFile);
// fs.renameSync('node.txt','nodeJs.txt');

// fs.writeFileSync('abc.txt','welcome');
// fs.unlinkSync('abc.txt');
// const dir='ff'
// try{
//     fs.rmdirSync(dir,{recursive:true});
//     console.log(`${dir} is deleted`);
// }catch(err){
//     console.log(`error while deleting ${dir}`);
// }