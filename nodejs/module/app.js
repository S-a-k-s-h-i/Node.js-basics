const EventEmitter=require("events");
var name="sakshi";

class Emitter extends EventEmitter{
    log(message){
        console.log(name+message);
        // Raising an event
        this.emit("messageLogged",{id:1,url:"http://"})
    }
}
// module.exports.log=log;
module.exports=Emitter;