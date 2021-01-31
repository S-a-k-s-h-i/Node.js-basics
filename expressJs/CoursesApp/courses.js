const Joi=require('joi');
const express = require("express");
const app = express();
app.use(express.json());
const port=process.env.port || 8080;
const courses = [
    {id:1,name:'node with express'},
    {id:2,name:'JavaScript'},
    {id:3,name:'React'},
];
app.get("/",(req,res) => {
    res.send("Welcome.....")
})
app.get("/api/courses",(req,res) => {
    res.send(courses);
})


// POST Request
app.post("/api/courses", (req,res) => {
    const { error }=validateCourse(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    const course={
        id:courses.length+1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course);
})

// GET Request
app.get("/api/courses/:id",(req,res) => {
    const course=courses.find(c => c.id==parseInt(req.params.id))
    if (!course) res.status(404).send(`The course with ID:${req.params.id} was not found`);
    res.send(course);
})


// Put Request
app.put("/api/courses/:id",(req,res) => {
    const course = courses.find(c => c.id==parseInt(req.params.id))
    if(!course) res.status(404).send(`The course with ID:${req.params.id} was not found`);
    
    const { error }=validateCourse(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    course.name=req.body.name;
    res.send(course);  
})

// Delete Request
app.delete("/api/courses/:id",(req,res) => {
  const course = courses.find(c => c.id==parseInt(req.params.id));
  if(!course) res.status(404).send(`The course with ID:${req.params.id} was not found`);

  const index=courses.indexOf(course);
  courses.splice(index,1);
  res.send(course)
})

// function to validate the input course name
function validateCourse(course){
    const schema={
        name:Joi.string().min(3).required()
    }
    return Joi.validate(course,schema);
}

app.listen(port,() => {
    console.log(`Listening on port http://localhost:${port}`);
  })