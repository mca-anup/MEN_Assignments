const express = require('express');
const axios = require('axios');
const app = express();
const port = 4002;

app.use(express.json());

let comments = [
    { id: 1, blogId: 1, text: 'Great Article!' },
    { id: 2, blogId: 1, text: 'Very helpful, thanks!' },
    { id: 3, blogId: 2, text: 'Clear Explanation!' },
];

// Get Comments for a blog
app.get('/comments/:blogId', async (req, res) => {

    const blogComments = comments.filter(c => c.blogId === parseInt(req.params.blogId));

    try {
        // Fetch blog details from Blog Service based on the blogId
        const blogResponse = await axios.get(`http://localhost:4001/blogs/${req.params.blogId}`);
        res.json({
            blog: blogResponse.data,
            comments:blogComments
        });
    } catch (err) {
        res.status(500).send(`Error fetching blog data! ${err}`);
    }
});

app.listen(port, () => {
    console.log(`Blog service running at port ${port}!`);
})