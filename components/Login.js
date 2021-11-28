import React, {useState} from "react";

const Login = ({setToken}) => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async (event) => {
        try {
            event.preventDefault();
            const response = await fetch('http://strangers-things.herokuapp.com/api/2108-CSE-RM-WEB-PT/guests/login', {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                guest: {
                  username: username,
                  password: password
                }
              })
            })
            const result = await response.json()
            console.log("result:",result)
            setToken(result.data.token)
            setShowCredentialsError(false)
          } catch (error) {
            setShowCredentialsError(true)
            console.error
          }
        }
      
        return <>
        <h1>LOGIN</h1>
        <form onSubmit={login}>
          <div>
            <label class="form-label" for="inputUsername">Username</label>
            <input type="text" value={username} placeholder="username" onChange={(ev)=>{setUsername(ev.target.value)}}/></div>
          <div>
            <label class="form-label" for="inputPassword">Password</label>
            <input type="password" value={password} placeholder="password" onChange={(ev)=>{setPassword(ev.target.value)}}/></div>
          <div><button type="submit">Login</button></div>
        </form>
        { showCredentialsError ? <div className="error">Incorrect username and password combination.</div> : null }
        </>
      }
      
      export default Login;