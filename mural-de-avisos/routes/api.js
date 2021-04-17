const express = require('express');
const router = express.Router();
const cors = require('cors');
const posts = require('../model/posts')

const option = {
    origin: 'http://localhost:3000'
}

router.use(cors(option));
router.get('/all', (req, res) => {
    res.json(posts.getAll());
});
router.post('/new', express.json(), (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    let tmpID = posts.newPost(title, description);
    res.send(`Post ${tmpID} adicionado com sucesso!`);
});
router.post('/delete', express.json(), (req, res) => {
    let id = req.body.id;
    posts.deletePosts(id);
    res.send(`Post ${id} removido com sucesso!`);
});

module.exports = router;