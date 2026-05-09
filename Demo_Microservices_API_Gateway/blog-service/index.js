const express = require('express');
const app = express();
const port = 4001;

app.use(express.json());

let blogs = [
    {id:1, title:'Microservices in Node.js', content:'Intro to Microservices.....'},
    {id:2, title:'API Gateway Basics', content:'Variety of API Gateways are there.....'}
];

// Get all blogs
app.get('/blogs',(req,res) =>{
    res.json(blogs);
});

// Get blog by id
app.get('/blogs/:id',(req,res) =>{
    const blog = blogs.find(b => b.id === parseInt(req.params.id));
    blog ? res.json(blog) : res.status(404).send('Blog not found!');
});

app.listen(port,() =>{
    console.log(`Blog service running at port ${port}!`);
})