import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Link, NavLink, BrowserRouter as Router, useNavigate, useParams } from 'react-router-dom'
import './Main.css'
import Main from './components/Main';
import AccountForm from './components/AccountForm'
import Profile from './components/Profile';

ReactDOM.render(
    <Router>
        <Main />
    </Router>,
    document.getElementById('app')
)