import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './Main.css'
import Main from "./components"


ReactDOM.render(
    <Router>
        <Main />
    </Router>,
    document.getElementById('app')
)