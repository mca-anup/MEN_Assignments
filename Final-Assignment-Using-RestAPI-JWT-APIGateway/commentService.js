// commentService.js
const express = require('express');
const app = express();
app.use(express.json());

// Mock comment data
let comments = [
  { id: 1, blogId: 1, text: 'Great intro!' },
  { id: 2, blogId: 1, text: 'Very clear explanation.' },
  { id: 3, blogId: 2, text: 'Kafka part was useful.' },
  { id: 4, blogId: 3, text: 'API Gateway example helped me.' }
];

// Get comments for a blog
app.get('/comments/:blogId', (req, res) => {
  const blogComments = comments.filter(c => c.blogId == req.params.blogId);
  res.json(blogComments);
});

// Add a comment
app.post('/comments', (req, res) => {
  const comment = { id: comments.length + 1, ...req.body };
  comments.push(comment);
  res.status(201).json(comment);
});

app.listen(4002, () => console.log('Comment Service running on port 4002'));
