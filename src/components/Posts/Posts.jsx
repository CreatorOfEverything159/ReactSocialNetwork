import React from 'react';
import styles from "./Posts.module.css";
import Post from "../Post/Post";

const Posts = (props) => {

    let posts = props.posts.map(post => {
        return <Post message={post.postMessage} likesCount={post.likesCount}/>
    })

    return (
        <div className={styles.posts}>
            { posts }
        </div>
    );
};

export default Posts;