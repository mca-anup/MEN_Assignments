const express = require('express')
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();
const port = 4000;

app.use(express.json());

// Proxy Blogs
app.use('/blogs',createProxyMiddleware({
    target:'http://localhost:4001/blogs',
    changeOrigin:true, // This avoids CORS or host-based routing issues
    pathRewrite:{'^/blogs':''}
}));

// Proxy Comments
app.use('/comments',createProxyMiddleware({
    target:'http://localhost:4002/comments',
    changeOrigin:true,
    pathRewrite:{'^/comments':''}
}));

app.listen(port, () =>{
    console.log(`API Gateway running at port ${port}!`);
})