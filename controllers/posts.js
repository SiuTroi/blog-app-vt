const PostModel = require("../models/PostMoel.js")

const getPosts = async (req, res) => {
    try {
        // If default is find(), It will return all posts on database
        const posts = await PostModel.find()
        console.log("posts", posts)
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({ error: error})
    }
}

const createPost = async (req, res) => {
    try {
        const newPost = req.body;

        const post = new PostModel(newPost)
        await post.save()
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({ error: error})
    }
}

const updatePost = async (req, res) => {
    try {
        const updatePost = req.body;

        // add parameter { new: true } If want return new data when updated after
        const post = await PostModel.findByIdAndUpdate({ _id: updatePost._id}, updatePost, { new: true })
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({ error: error})
    }
}
module.exports = { getPosts, createPost, updatePost }