import React from 'react'
import styles from "./CreatePost.module.css"
import Button from "../../UI/Button/Button"
import Textarea from "../../UI/Textarea/Textarea";

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
            <Textarea ref={newPostElement}
                      onChange={onPostChange}
                      value={props.newPostText}
                      placeholder="Что у вас нового?"/>
            <Button onClick={onAddPost}>Опубликовать</Button>
        </div>
    )
}

export default CreatePost