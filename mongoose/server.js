const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/users",{ useNewUrlParser: true , useUnifiedTopology: true, useCreateIndex:true})
.then( () => console.log("Connected!!!!"))
.catch( (err) => console.log(err));

const db=require("./models/index");
const Usersinfo = require("./models/Userinfo");

// Create Document
const createDocument=async() => {
    try{
        const user=new Usersinfo({
            name:"Meena   ",
            age:22,
            email:"meena@gmail.com",
            position:"Frontend",
            state:"Delhi",
            active:true,
        })
        user.save();
    }catch(err){
        console.log(err);
    }
}
createDocument()

const getDocument= async() => {
    // const result = await db.Userinfo.find({age:{$lt:20}}).select({name:1,_id:0});
    try{
        // const result=await db.Userinfo.find({state:{$nin:["Uttarakhand","Delhi"]}}).select({name:1});
        const result=await db.Userinfo.find({$and:[{state:"Delhi"},
        {age:{$gt:18}}]}).select({name:1}).countDocuments();
        const totalDocuments=await db.Userinfo.find().countDocuments();
        const sorting=await db.Userinfo.find().select({name:1}).sort({name:1});
        console.log(result);
        console.log('Total Documents ',totalDocuments);
        console.log('After Sorting',sorting);
    }catch(err){
    console.log(err);
    }
}
// getDocument();

// Update Documents
const updateDocument=async(_id) => {
    try{
        const result=await db.Userinfo.findByIdAndUpdate({_id},{
            $set:{
                age:20
            }},
            { new: true, useFindAndModify: false 
        });
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
// updateDocument("6022966e66538a767bb20571")

// Delete Document
const deleteDocument=async(_id) => {
    try{
       const result=await db.Userinfo.findByIdAndDelete({_id});
       console.log(result);
    }catch(err){
        console.log(err)
    }
}
// deleteDocument("60263aaed41e576311b2d882");