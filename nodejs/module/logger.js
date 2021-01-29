const Logger=require("./app");
console.log(Logger);
const logger=new Logger();

// registering a listener
logger.on("messageLogged",(arg) => {
    console.log("Listener Called",arg);
})
logger.log(" hello!!!");


// logger.log("hello");    object
// logger("hello!!!!")
