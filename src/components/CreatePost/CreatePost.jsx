import React from 'react';
import styles from "./CreatePost.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profileReducer";

const CreatePost = (props) => {

    let newPostElement = React.createRef()

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={styles.createPost}>
                <textarea
                    ref={ newPostElement }
                    onChange={onPostChange}
                    value={props.newPostText}
                    placeholder="Что у вас нового?"/>
            <button onClick={ addPost } className={styles.addPost}>Опубликовать</button>
        </div>
    );
};

export default CreatePost;