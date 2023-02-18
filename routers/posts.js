const express = require("express");
const  { getPosts, createPost, updatePost } = require("../controllers/posts.js")
const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)
router.post('/update', updatePost)

module.exports = router;