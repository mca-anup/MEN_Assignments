const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const jwt = require('jsonwebtoken');

const app = express();

// JWT Middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'secretKey', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Proxy routes
app.use('/blogs', authenticateToken, createProxyMiddleware({ target: 'http://localhost:4001', changeOrigin: true }));
app.use('/comments', authenticateToken, createProxyMiddleware({ target: 'http://localhost:4002', changeOrigin: true }));

// Login route to issue JWT
app.post('/login', express.json(), (req, res) => {
  const user = { email: req.body.email, role: 'user' };
  const token = jwt.sign(user, 'secretKey');
  res.json({ token });
});

app.listen(3000, () => console.log('API Gateway running on port 3000'));
