import React, { useState } from 'react';

const MessageForm = () => {
    const [message, setMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
    }
    return <>
    <h5>Messages on this post</h5>
    <form onSubmit={handleSubmit}>
        <input value={message} onChange={(ev) => setMessage(ev.target.value)} />
        <button type="submit">Post Message</button>
    </form>
    </>
}

export default MessageForm;