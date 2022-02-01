import React, {useState} from 'react'
import { addPost } from "../util";

const AddPost = ({token}) => {
    console.log(token);
    const blankPost = {title: '', description: ''}
    const [post, setPost] = useState(blankPost)

    const handleSubmit= async (ev) => {
        ev.preventDefault();
        await addPost(token, post);
        setPost(blankPost)
    }

    return <>
    <h2>Add Post</h2>
    <form onSubmit={handleSubmit}>
        <input value={post.title} placeholder="title" onChange={(ev)=>{
            setPost({...post, title: ev.target.value})
        }}></input>
        <input value={post.description} placeholder="description" onChange={(ev)=>{
            setPost({...post, description: ev.target.value})
        }}></input>
        <input value={post.price} placeholder="price" onChange={(ev)=> {
            setPost({...post, price: ev.target.value})
        }}></input>
        <button type="submit">Submit</button>
    </form>
    </>
}

export default AddPost;