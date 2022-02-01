import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const AccountForm = ({setToken, action, setIsLoggedIn, isLoggedIn}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showCredentialsError, setShowCredentialsError] = useState(false)
    const [accountError, setAccountError] = useState('')
    const [currentUser, setCurrentUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn) navigate('/home')
    }, [isLoggedIn])

    const fetchUserData = async (auth_token) => {
        try {
            const user_data_headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth_token}`
            }
            console.log(user_data_headers)

            const response = await fetch(`https://strangers-things.herokuapp.com/api/2108-CSE-RM-WEB-PT/users/me`, {
                headers: user_data_headers
            })
            const result = await response.json()
            console.log(result)
            return result
        }catch (error) {
            console.log(error)
        }
    }

    const submitAccountInfo = async (event) => {
        try{
            event.preventDefault();
            console.log(action);
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2108-CSE-RM-WEB-PT/users/${action}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                    username: username,
                    password: password
                    }
                })
            })
            const result = await response.json()
            console.log(result)
            const auth_token = result.data.token
            setToken(auth_token)
            setIsLoggedIn(true)
            const userData = await fetchUserData(auth_token)
            setCurrentUser(userData.data.guest)
            setShowCredentialsError(false)
            navigate('/home')
        } catch(error) {
            const errorMessage = action === 'login' ? "Incorrect username and password combination." : "Username already taken."
            setAccountError (errorMessage)
            setShowCredentialsError(true)
        }
    }

    
    return <>
    <h1>{action}</h1>
    <form onSubmit={submitAccountInfo}>
        <div>
            <label class="form-label" for="inputUsername">Username:</label>
            <input type="text" placeholder="username" minLength="7" onChange={(ev)=>{setUsername(ev.target.value)}} required/></div>
        <div>
            <label class="formlabel" for="inputPassword">Password:</label>
            <input type="password" placeholder="password" minLength="7" onChange={(ev)=>{setPassword(ev.target.value)}} required/></div>
        <div><button type="submit">Submit</button></div>
    </form>
    { showCredentialsError ? <div className="error">{accountError}</div> : null }
    {
        action === 'login'
        ? <Link to='/account/register'>Don't have an account? Please Sign up here.</Link>
        : <Link to='/account/login'>Already have an account? Please Login here.</Link>
    }
    </>
}

export default AccountForm;