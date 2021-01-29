const EventEmitter=require("events");
const emitter = new EventEmitter(); 

// registering a listener
emitter.on("messageLogged",(arg) => {
    console.log("Listener Called",arg);
})
emitter.on("logging",(arg) => {
    console.log(`logged by ${arg.name} , whose id is ${arg.id}`);
})

// raise an event
// emitter.emit("messageLogged");
emitter.emit("messageLogged",{id:1,url:"http://"})

emitter.emit("logging",{id:1,name:"sakshi"});