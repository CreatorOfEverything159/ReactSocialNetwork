import React from 'react';
import styles from "./CreatePost.module.css";

const CreatePost = (props) => {

    let newPostElement = React.createRef()

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={styles.createPost}>
                <textarea
                    ref={ newPostElement }
                    onChange={onPostChange}
                    value={props.newPostText}
                    placeholder="Что у вас нового?"/>
            <button onClick={ onAddPost } className={styles.addPost}>Опубликовать</button>
        </div>
    );
};

export default CreatePost;