import React, { useState, useEffect} from "react";
import PostSingle from "./PostSingle"; 
import { deletePost } from '../util'
import { Link, useSearchParams } from "react-router-dom";
import PostView from "./PostView";

const Posts = ({currentUser, token, setPosts, posts}) => {
    //const [posts, setPosts] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("")

    const [searchParams, setSearchParams]= useSearchParams()
    const searchTerm=searchParams.get("searchTerm")

    const postMatches =(post, text) => {
        text = text.toLowerCase()
        const {title, description} = post
        for  (const field of [title, description]) {
            if(field.toLowerCase().includes(text)) {
                return true;
            }
        }
    }

    const filteredPosts = searchTerm ? posts.filter(post => postMatches(post, searchTerm)) : posts
    console.log(filteredPosts)

    const fetchPosts = async () => {
        try{
        const response = await fetch('https://strangers-things.herokuapp.com/api/2108-CSE-RM-WEB-PT/posts')
            const result = await response.json()
                            console.log(result)
                const postResult = result.data.posts
                return postResult
            
        } catch(error) {
            console.log(error)
            const errorMessage = action === 'post' ? "Please fill out the appropriate information" : "You must be a registered user in order to post."
            setPostError (errorMessage)
            setShowCredentialsError(true)
        }
        }
    useEffect(async () => {
        const postResult = await fetchPosts()
        console.log(postResult)
        setPosts(postResult)
    },[])

    const handleDelete = async (post_id) => {
        await deletePost(token, post_id)
        const postResult = await fetchPosts()
        setPosts(postResult)
    }

    return <>
    <h1>POSTS</h1>
    <input type="text" placeholder="search posts" value={searchTerm} onChange={(ev) => {
        setSearchParams({searchTerm: ev.target.value })
        }}/>
    {
        filteredPosts && filteredPosts.length
        ? filteredPosts.map((post, idx) => {
            return <div key={post._id || idx}>
                <PostSingle post={post}>
                    <>
                    {
                        currentUser.id === post._guestId && <button onClick={() => handleDelete(post._id)}>Delete</button>
                    }
                    <Link to={`/posts/${post._id}`}>View Details</Link>
                    </>
                </PostSingle>
            </div>
        })
        : <h5>There are no posts to display</h5>
    }
    <form>
        <div><input type="text" value={title} placeholder="Title" onChange={(ev)=>{setTitle(ev.target.value)}}/></div>
        <div><input type="text" value={description} placeholder="Description" onChange={(ev)=>{setDescription(ev.target.value)}}/></div>
        <div><input type="text" value={price} placeholder="Price" onChange={(ev)=>{setPrice(ev.target.value)}}/></div>
        <div><input type="text" value={location} placeholder="Location" onChange={(ev)=>{setLocation(ev.target.value)}}/></div>
        <div><button type="submit">Submit Post</button></div>
    </form>
    
    </>
}


export default Posts;