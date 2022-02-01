import React, { useState, useEffect } from 'react'
import { Switch, Routes, Route, NavLink, BrowserRouter as Router} from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import AccountForm from './AccountForm'
import Profile from './Profile'
import Posts from './Posts'
import AddPost from './AddPost'
import { fetchUserData } from '../util'
import PostView from './PostView'

const Main = () => {
const [token, setToken] = useState('')
const [accountPage, setAccountPage] = useState('login')
const [isLoggedIn, setIsLoggedIn] = useState(false)
const [currentUser, setCurrentUser] = useState('')
const [posts, setPosts] = useState([])

useEffect(async () => {
  const savedToken = localStorage.getItem('token')
  if (savedToken){
    console.log("token exists")
    setToken(savedToken)
    setIsLoggedIn(true)
    const userData = await fetchUserData(savedToken)
    setCurrentUser(userData.data.guest)
  }
}, [])


    return <>
    <Header />
          <hr/>
          <Routes>
              <Route path='/home' exact element={ 
                <>
                <h1>Welcome to Stranger's Things!</h1>
                <h3>Please make sure to login or register first before posting.</h3>
                </>
              }/>
              <Route path='/register' element={ <AccountForm setToken={setToken} action="register" setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setCurrentUser={setCurrentUser} currentUser={currentUser} />}/>
              <Route path='/login' element={ <AccountForm setToken={setToken} action="login" setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setCurrentUser={setCurrentUser} currentUser={currentUser} />}/>
              <Route path='/posts' element={ <Posts token={token} currentUser={currentUser} setPosts={setPosts} posts={posts}/>}/>
              <Route path ='/add_post' element={<AddPost token={token} /> }/>
              <Route path = '/Profile' element={<Profile isLoggedIn={isLoggedIn} currentUser={currentUser}/>}/>
              <Route path ='/posts/:postId' element={<PostView posts={posts} token={token} isLoggedIn={isLoggedIn} />}/>
              <Route path={`/{accountPage}`} element={ <> 
              { accountPage === 'profile' ? 
              <Profile /> : <AccountForm setToken={setToken} action="login" setAccountPage={setAccountPage} />
            }
            </>
              }/>
              <Route path="/contact" element={
                  <>
                  <h1>CONTACT US</h1>
                  <h3>This is our Contact page for any sort of assistance you may require, or any strange questions you may have.</h3>
                  </>
              }/>
              </Routes>
              </>  
}

export default Main;