import React, { Component } from 'react';
import logo from '../assets/HeaderNavLogoRunner.png';
import PasswordModal from './PasswordModal.js'
import '../css/Login.css';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            forgotPassword: false
        }
    }
    generateToken = (length) => {
        const base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
        const token = [];  
        for (let i=0; i<length; i++) {
            token.push(base[(Math.random() * (base.length-1)).toFixed(0)]);
        }
        return token.reduce((curr, acc) => curr + acc)
    }
    onHandleForgotPassword = () => {
        this.setState((prevState) => ({ forgotPassword:!prevState.forgotPassword }));
    }
    onHandelSubmit = (e) => {
        e.preventDefault();
        // clear inputs
        e.target.password.value = "";
        e.target.email.value = "";
        // create & store accessToken in sessionStorage
        sessionStorage.setItem("accessToken", this.generateToken(30));
        this.props.loggedIn();
    }
    render() {
        return (
            <div className="login">
                <div className="logo">
                    <img src={logo} alt="logo for Runner"></img>
                </div>
                <form onSubmit={this.onHandelSubmit}>
                    <div className="inputs">
                        <div className="input">
                            <label htmlFor="email-login">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                >
                            </input>
                        </div>
                        <div className="input">
                            <label htmlFor="student-select">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                required
                                >
                            </input>
                        </div>
                    </div>
                    <div className="auxilary-buttons">
                        <div className="checkbox">
                            <input type="checkbox" name="rememberMe" value="small" id="rememberMe"></input>
                        </div>
                        <label htmlFor="rememberMe">Remember Me</label>
                        <p onClick={this.onHandleForgotPassword}>Forgot Password?</p>
                    </div>
                    <button className="submit-button">Login</button>
                </form>
                <PasswordModal forgotPassword={this.state.forgotPassword} onHandleForgotPassword={this.onHandleForgotPassword}/>
            </div>
        )
    }
}
export default Login;