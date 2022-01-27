import React, {useEffect} from 'react'
import { useNavigate } from "react-router";



const Profile = ({isLoggedIn, currentUser}) => {
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!isLoggedIn) navigate('/account/login')
    }, [])

    return <>
    <h1>PROFILE</h1>
    <div>Hello! {currentUser && currentUser.username} Here is where your Profile info is.</div>
    </>
}

export default Profile;