import express from 'express'
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/postController.js'
const router = express.Router();


//get all posts
router.get('/', getPosts)

//Get a single post
router.get('/:id', getPost)

//Create new post
router.post('/', createPost);

//Update post

router.put('/:id', updatePost);

//Delete Post

router.delete('/:id', deletePost);


export default router