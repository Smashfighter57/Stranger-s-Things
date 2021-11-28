import React, {useState} from 'react'
import { addPost } from "../util";

const AddPost = ({token}) => {
    const blankPost = {title: '', description: ''}
    const [post, setPost] = useState(blankPost)

    const handleSubmit= async (ev) => {
        ev.preventDefault();
        await addPost({url:'/posts', method: 'POST', token, body: {post: post}})
        setPost(blankPost)
    }

    return <>
    <h2>Add Post</h2>
    <form onSubmit={handleSubmit}>
        <input value={post.title} placeholder="title" onChange={(ev)=>{
            setPost({...post, title: ev.target.value})
        }}></input>
        <input value={post.description} placeholder="description" onChange={()=>{
            const newPost = post
            newPost.post = ev.target.value
            setPost({...post, description: ev.target.value})
            setNewPost(newPost)
        }}></input>
        <button type="submit">Submit</button>
    </form>
    </>
}

export default AddPost;