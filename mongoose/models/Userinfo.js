const mongoose=require("mongoose");
const validator=require("validator");
const Usersinfo=new mongoose.model("Usersinfo",
new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        minlength:3,
        maxlength:30
    },
    age:{
        type:Number,
        validate(age){
            if(age<=0){
                throw new Error("age can never be 0 or negative");
            }
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is inValid");
            }
        }
    },
    position:{
        type:String,
        required:true,
        lowercase:true,
        enum:["frontend","backend","database"]
    },
    state:String,
    active:Boolean,
    registrationDate:{
        type:Date,
        default:Date.now
    }   
}));

module.exports=Usersinfo;