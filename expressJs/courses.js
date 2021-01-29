const express = require("express");
const app = express();
app.use(express.json());
const port=process.env.port || 8000;
const courses = [
    {id:1,name:'node with express',price:670},
    {id:2,name:'JavaScript',price:570},
    {id:1,name:'React',price:650},
];
app.get("/",(req,res) => {
    res.send("Welcome.....")
})
// app.get("/api/courses",(req,res) => {
//     res.send(courses);
// })


// POST Request
app.get("/api/courses", (req,res) => {
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
app.listen(port,() => {
  console.log(`Listening on port http://localhost:${port}`);
})