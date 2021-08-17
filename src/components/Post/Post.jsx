import styles from "./Post.module.css";
import React from "react";

const Post = (props) => {
    return (
        <div className={styles.profile__post}>
            <div className={styles.post__text}>{props.message}</div>
            <div className={styles.post__likesCount}>{props.likesCount} лайков</div>
        </div>

    )
}
export default Post;