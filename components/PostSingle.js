import React from 'react';

const PostSingle = ({post, children}) => {

    return <div>
        <h5>
            Title: {post.title}
        </h5>
        <div>
            Description: {post.description}
        </div>
        {
            children
        }
    </div>
}

export default PostSingle