import React from 'react';
import PostSingle from './PostSingle';
import { useParams } from 'react-router';
import MessageForm from './MessageForm'

const PostView = ({posts, token}) => {
    const {postId} = useParams();
    console.log(posts, postId)
    const post = posts.find(post => post._id === postId);
    console.log(post)

    return <PostSingle post={post}>
        <MessageForm post={post} token={token}/>
        {
            post.messages.map(message => <div>
                <h5>Messages</h5>
                <div>From User: {message.guest.username}</div>
                <div>Content: {message.content}</div>
            </div>)
        }
    </PostSingle>
}

export default PostView;