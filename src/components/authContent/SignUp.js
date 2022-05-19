import React, { useState } from 'react'
import './Auth.css'
import Navigation from '../common/Navigation';


const SignUp = (props) => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const changeName = (event) => {
        setName(event.target.value);
    };

    const changePass = (event) => {
        setPass(event.target.value);
    };

    const transferValue = (event) => {
        event.preventDefault();
        const val = {
            name,
            pass,
        };
        props.func(val);
        clearState();
    };

    const clearState = () => {
        setName('');
        setPass('');
    };
    return (
        <div>
            <Navigation />
            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form class="bg1 bg2">
                <h3>SignUp Here</h3>

                <label for="username">Username</label>
                <input type="text" placeholder="Email or Phone" value={name} onChange={changeName} id="username" />
                <label for="password">Password</label>
                <input type="password" placeholder="Password" value={pass} onChange={changePass} id="password" />
                <label for="password">Confirm Password</label>
                <input type="password" placeholder="Password" id="password" />
                <button onClick={transferValue}>Log In</button>
                <div class="social">
                    <div class="go"><i class="fab fa-google"></i>  Google</div>
                    <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
                </div>
            </form>
        </div >
    )
}

export default SignUp;