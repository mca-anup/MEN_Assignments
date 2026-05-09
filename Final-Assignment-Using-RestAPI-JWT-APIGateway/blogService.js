// blogService.js
const express = require('express');
const app = express();
app.use(express.json());

// Mock blog data
let blogs = [
  { id: 1, title: 'Intro to Microservices', content: 'Microservices basics explained.' },
  { id: 2, title: 'Event Driven Systems', content: 'Kafka and RabbitMQ overview.' },
  { id: 3, title: 'API Gateway Patterns', content: 'How gateways simplify client access.' }
];

// Get all blogs
app.get('/blogs', (req, res) => {
  res.json(blogs);
});

// Get single blog
app.get('/blogs/:id', (req, res) => {
  const blog = blogs.find(b => b.id == req.params.id);
  blog ? res.json(blog) : res.status(404).json({ error: 'Blog not found' });
});

// Add a blog
app.post('/blogs', (req, res) => {
  const blog = { id: blogs.length + 1, ...req.body };
  blogs.push(blog);
  res.status(201).json(blog);
});

app.listen(4001, () => console.log('Blog Service running on port 4001'));
