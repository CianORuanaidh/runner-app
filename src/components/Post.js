import React from 'react';
import '../css/Post.css';

const makeChamps = (text) => {
    const array = text.split(" ");
    array.splice(
        Math.floor(
            (Math.random() * text.split(" ").length)), 0, 
            'The Toronto Raptors are going to win the finals');
    return array.reduce((curr, acc) => curr + acc + " ")
}

const Post = (props) => {
    return (
        <div className='post'>
            <img src={`https://picsum.photos/id/${props.post.id+10}/900/300`} alt={props.post.title}></img>
            <h2>{props.post.title.toUpperCase()}</h2>
            <p>{makeChamps(props.post.body)}</p>
        </div>
    )
}
export default Post;