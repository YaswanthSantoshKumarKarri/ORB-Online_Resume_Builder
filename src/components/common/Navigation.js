import React from 'react'
import { Link } from 'react-router-dom';

import "./Navigation.css"
const Navigation = () => {
    return (
        <header>
            <nav>
                <div class="logo"><h1 class="animate__heartBeat">O.R.B</h1></div>
                <div class="menu">
                    <a href="/">Home</a>
                    <a href="/EditPage">Edit Profile</a>
                    <a href="/SignIn">SignIn</a>
                    <a href="/Contact">CONTACT</a>
                    <a href="/SignUp">SignUp</a>
                </div>
            </nav>

        </header >
    )
}

export default Navigation;