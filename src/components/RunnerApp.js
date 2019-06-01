import React, { Component } from 'react';
import Posts from './Posts.js';
import Login from './Login.js';

class RunnerApp extends Component {
    constructor(){
        super()
        this.state = {
            loggedIn: false
        }
    }
    loggedIn = () => {
        this.setState(()=>({ loggedIn: true }));
    }
    loggedOut = () => {
        this.setState(()=>({ loggedIn: false }));
        sessionStorage.setItem("accessToken", null);
    }
    render() {
        return (
            <div className="RunnerApp">
                {   
                    // if we have accessToken & are logged in, show posts page
                    // else, show login page 
                    this.state.loggedIn && !!sessionStorage.accessToken ? 
                    <Posts loggedOut={this.loggedOut}/> 
                    : 
                    <Login loggedIn={this.loggedIn}/>
                }
            </div>      
        )
    }

}
export default RunnerApp;