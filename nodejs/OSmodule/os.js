const os=require("os");
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
const freeMemory=os.freemem();
console.log(`free memory is ${freeMemory/1024/1024/1024}`);
const totalMemory=os.totalmem();
console.log(`total memory is ${totalMemory/1024/1024/1024}`);
