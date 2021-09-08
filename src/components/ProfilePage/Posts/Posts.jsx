import React from 'react'
import styles from "./Posts.module.css"
import Post from "../../UI/Post/Post"
import * as axios from "axios"

const Posts = (props) => {

    let posts = props.posts.map(post => {
        return <Post message={post.postMessage}
                     key={post.id}
                     likesCount={post.likesCount}/>
    })

    return (
        <div className={styles.posts}>
            { posts }
        </div>
    )
}

export default Posts
