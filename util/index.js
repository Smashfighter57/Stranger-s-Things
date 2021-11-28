const BASE_URL = 'http://localhost:4000/api/2108-CSE-RM-WEB-PT'

export const fetchPosts = async () => {
    try {
        const response = await fetch('http://localhost:4000/api/2108-CSE-RM-WEB-PT/posts')
        const result = await response.json()
        return result.data.posts
    }catch(error) {
        console.log(error)
    }
}

export const fetchUserData = async (token) => {
    try {
        const user_data_headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        const response = await fetch('http://localhost:4000/api/2108-CSE-RM-WEB-PT/guests/me', {
            headers: user_data_headers
        })
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error)
    }
}

export const addPost = async (token, post) => {
    try {
        const response = await fetch('http://localhost:4000/api/2108-CSE-RM-WEB-PT/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: post
            })
        })
        const result= await response.json
        console.log(result)
    }catch (error){
        console.log(error)
    }
}

export const deletePost = async(token, post_id) => {
    try {
        const response = await fetch(`http://localhost:4000/api/2108-CSE-RM-WEB-PT/posts/${post_id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const result = await response.json()
        console.log(result)
    } catch(error) {
        console.log(error)
    }
}

export const addMessage = async (token, post_id, comment) => {
    try {
        const response = await fetch(`http://localhost:4000/api/2108-CSE-RM-WEB-PT/posts/${post_id}/comments`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                message: {
                    content: message
                }
            })
        })
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error)
    }
}