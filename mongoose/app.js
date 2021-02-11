const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/users",{ useNewUrlParser: true , useUnifiedTopology: true})
.then( () => console.log("Connected!!!!"))
.catch( (err) => console.log(err));

const Customer=require("./models/Customer");
const Identifier=require("./models/Identifier");
const db=require("./models/index");

const createCustomer=function(name,age,gender){
    const customer=new Customer({
        name,
        age,
        gender
    });
    return customer.save();
}

const createIdentifier=function(cardCode,customer){
    const identifier=new Identifier({
        cardCode,
        customer
    });
    return identifier.save()
};

// 0NE TO FEW
const createTutorial = function(tutorial) {
    return db.Tutorial.create(tutorial).then(docTutorial => {
      console.log("\n>> Created Tutorial:\n", docTutorial);
      return docTutorial;
    });
  };
const createImage = function(tutorialId, image) {
    return db.Image.create(image).then(docImage => {
        console.log("\n>> Add Image:\n", image);
    return db.Tutorial.findByIdAndUpdate(
      tutorialId,
      {
        $push: {
          images: {
            url: image.url,
            caption: image.caption
          }
        }
      },
      { new: true, useFindAndModify: false }
    );
    })
    
};

const createComment = function(tutorialId, comment) {
    return db.Comment.create(comment).then(docComment => {
      console.log("\n>> Created Comment:\n", docComment);
  
      return db.Tutorial.findByIdAndUpdate(
        tutorialId,
        { $push: { comments: docComment._id } },
        { new: true, useFindAndModify: false }
      );
    });
  };

const createCategory = function(category) {
    return db.Category.create(category).then(docCategory => {
      console.log("\n>> Created Category:\n", docCategory);
      return docCategory;
    });
};


const addTutorialToCategory = function(tutorialId, categoryId) {
    return db.Tutorial.findByIdAndUpdate(
      tutorialId,
      { category: categoryId },
      { new: true, useFindAndModify: false }
    );
};
  
const createTag = function(tag) {
    return db.Tag.create(tag).then(docTag => {
      console.log("\n>> Created Tag:\n", docTag);
      return docTag;
    });
  };

const addTagToTutorial = function(tutorialId, tag) {
    return db.Tutorial.findByIdAndUpdate(
      tutorialId,
      { $push: { tags: tag._id } },
      { new: true, useFindAndModify: false }
    );
};

const addTutorialToTag = function(tagId, tutorial) {
    return db.Tag.findByIdAndUpdate(
      tagId,
      { $push: { tutorials: tutorial._id } },
      { new: true, useFindAndModify: false }
    );
};

const run = async function() {
    // var tutorial = await createTutorial({
    //   title: "Tutorial #1",
    //   author: "bezkoder"
    // });
  
    // tutorial = await createImage(tutorial._id, {
    //   path: "sites/uploads/images/mongodb.png",
    //   url: "/images/mongodb.png",
    //   caption: "MongoDB Database",
    //   createdAt: Date.now()
    // });
    // console.log("\n>> Tutorial:\n", tutorial);
  
    // tutorial = await createImage(tutorial._id, {
    //   path: "sites/uploads/images/one-to-many.png",
    //   url: "/images/one-to-many.png",
    //   caption: "One to Many Relationship",
    //   createdAt: Date.now()
    // });
    // console.log("\n>> Tutorial:\n", tutorial);

    // tutorial = await createComment(tutorial._id, {
    //     username: "jack",
    //     text: "This is a great tutorial.",
    //     createdAt: Date.now()
    //   });
    //   console.log("\n>> Tutorial:\n", tutorial);
    
    //   tutorial = await createComment(tutorial._id, {
    //     username: "mary",
    //     text: "Thank you, it helps me alot.",
    //     createdAt: Date.now()
    //   });
    //   console.log("\n>> Tutorial:\n", tutorial);

    // var tutorial = await createTutorial({
    //     title: "Tutorial #1",
    //     author: "bezkoder"
    //   });
    
    //  var category = await createCategory({
    //     name: "Node.js",
    //     description: "Node.js tutorial"
    //   });
    
    //   tutorial = await addTutorialToCategory(tutorial._id, category._id);
    //   console.log("\n>> Tutorial:\n", tutorial);

    var tut1 = await createTutorial({
        title: "Tut #1",
        author: "bezkoder"
      });
    
      var tagA = await createTag({
        name: "tagA",
        slug: "tag-a"
      });
    
      var tagB = await createTag({
        name: "tagB",
        slug: "tag-b"
      });
    
      var tutorial = await addTagToTutorial(tut1._id, tagA);
      console.log("\n>> tut1:\n", tutorial);
    
      var tag = await addTutorialToTag(tagA._id, tut1);
      console.log("\n>> tagA:\n", tag);
    
      tutorial = await addTagToTutorial(tut1._id, tagB);
      console.log("\n>> tut1:\n", tutorial);
    
      tag = await addTutorialToTag(tagB._id, tut1);
      console.log("\n>> tagB:\n", tag);
    
      var tut2 = await createTutorial({
        title: "Tut #2",
        author: "zkoder"
      });
    
      tutorial = await addTagToTutorial(tut2._id, tagB);
      console.log("\n>> tut2:\n", tutorial);
    
      tag = await addTutorialToTag(tagB._id, tut2);
      console.log("\n>> tagB:\n", tag);
  };

run()
// const getTutorialWithPopulate=async function(){
//     const tutorials=await db.Tutorial.find().populate("comments");
//     console.log(">All Identifiers ",tutorials);
// }
// getTutorialWithPopulate();

// createCustomer("Ash",19,"male")
// .then(customer => {
//     console.log(">Created new Customer",customer);

//     const customerId=customer._id.toString();
//     return createIdentifier(customerId.substring(0,10).toUpperCase(),customerId);
// })
// .then(identifier => {
//     console.log("Created new Identifier",identifier);
// })
// .catch(err => console.log(err));

// const showAllIdentifiers=async function(){
//     const identifiers=await Identifier.find().populate("customer","-_id-__v").select("__v");
//     console.log(">All Identifiers ",identifiers);
// }
// showAllIdentifiers();

// const usersSchema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     age:Number,
//     state:String,
//     active:Boolean,
//     registrationDate:{
//         type:Date,
//         default:Date.now
//     }   
// })
// const Usersinfo=new mongoose.model("Usersinfo",usersSchema);

// const user1=new Usersinfo({
//     name:"sakshi",
//     age:21,
//     state:"Uttarakhand",
//     active:true,  
// })
// user1.save();

// const createDocument=async() => {
//     try{
//         const user3=new Usersinfo({
//             name:"palak",
//             age:18,
//             state:"Delhi",
//             active:true,  
//         })
//         const user4=new Usersinfo({
//             name:"nidhi",
//             age:25,
//             state:"Rajasthan",
//             active:true,  
//         })
//         const user5=new Usersinfo({
//             name:"shalu",
//             age:22,
//             state:"Sikkim",
//             active:true,  
//         })
//         const result = await Usersinfo.insertMany([user3,user4,user5]);
//         console.log(result)
//     }catch(err){
//         console.log(err);
//     }
// }
// createDocument();

// const getDocument= async() => {
//     const result = await Usersinfo.find({state:"Sikkim"}).select({name:1});
//     console.log(result);
// }
// getDocument();