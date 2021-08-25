import React from 'react';
import Post from "../Post/Post";
import Posts from "./Posts";

const PostsContainer = (props) => {

    let posts = props.posts.map(post => {
        return <Post message={post.postMessage} likesCount={post.likesCount}/>
    })

    return (
        <Posts />
    );
};

export default PostsContainer;