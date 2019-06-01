import React, { Component } from 'react';
import Post from './Post.js'
import logo from '../assets/HeaderNavLogoRunner.png';
import '../css/Posts.css'

class Posts extends Component {
    constructor() {
        super()
        this.state = {
            apiFailed: false, 
            posts: []
        }
    }
    async componentDidMount() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const json = await response.json();
            this.setState({ posts: json });
        } catch (error) {
            console.log(error.message);
            this.setState({ apiFailed: true })
        }
    }
    render() {
        const errorMessage = <div className="error-message">Looks like were having some trouble, check back later.</div>
        return (
            <div className="posts">
                <header>
                    <div className="container">
                        <div>
                            <img src={logo} alt="logo"></img>
                        </div>
                        <div className='log-out'>
                            <p onClick={this.props.loggedOut}>log out</p>
                        </div>
                    </div>
                </header>
                <h1>View Posts Below</h1>
                <div className="post-holder">
                {
                // check for API error 
                this.state.apiFailed ? 
                    // if error, return error message
                    errorMessage 
                    : 
                    // else return aray of posts
                    this.state.posts.map(post => <Post post={post} key={post.id}/>)
                }
                </div>
            </div>
        )
    }

}

export default Posts;