import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Stranger's Things</h1>
        <nav class="main_nav"> 
            <ul>
                <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/Profile'>Profile</Link></li>
                <li><Link to='/Register'>Register</Link></li>
                <li><Link to='/Login'>Login</Link></li>
                <li><Link to='/Posts'>Posts</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>

            </ul>
        </nav>
    </header>
)

export default Header