const express=require('express');
const app=express();
const fs=require("fs");
const port=8080;
let data_of_books=[];
fs.readFile('bookData.json','utf-8',(err,data) => {
        if(err){
            console.log(err);
            return
        }
        data_of_books=JSON.parse(data)
        console.log('bb');
    });
app.get('/',(req,res) => {
    res.send('<h1>All types of Books are available.</h1><br><h3>Enjoy Reading</h3>')
})
app.get('/books',(req,res) => {
    res.send(data_of_books);
})
app.get('/books/:id',(req,res) => {
    const book=data_of_books.find(b => b.id==parseInt(req.params.id))
    if(!book)res.status(404).send(`book with the id:${req.params.id} NOT FOUND`);
    res.send(book);
})
app.post('/books',(req,res) => {
  const book={
      id:data_of_books.length+1,
      author:req.params.author,
      country:req.params.country,
      imageLink:req.params.imageLink,
      language:req.params.language,
      link:req.params.link,
      pages:req.params.pages,
      title:req.params.title,
      year:req.params.year
  }
  data_of_books.push(book);
  console.log(data_of_books);
  res.send(book);
})

app.listen(port,() => {
    console.log(`Listening on port http://localhost:${port}`);
})
