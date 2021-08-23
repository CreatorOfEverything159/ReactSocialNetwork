import React from 'react'
import styles from './Profile.module.css'
import Post from "../Post/Post"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profileReducer";

const Profile = (props) => {

    let posts = props.profilePage.posts.map(post => {
        return <Post message={post.postMessage} likesCount={post.likesCount}/>
    })

    let newPostElement = React.createRef()

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text,}
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={styles.prfile}>
            <div className={styles.profile__header}></div>
            <div className={styles.profile__info}>
                <div className={styles.profile__avatar}>
                    <div className={styles.avatar__photo}>
                        <img src="https://html5css.ru/w3images/avatar2.png" alt=""/>
                    </div>
                    <div className={styles.profile__name}>Name Name</div>
                </div>
            </div>
            <div className={styles.profile__createPost}>
                <textarea
                    ref={newPostElement}
                    onChange={onPostChange}
                    value={props.profilePage.newPostText}
                    placeholder="Что у вас нового?"/>
                <button onClick={ addPost } className={styles.profile__addPost}>Опубликовать</button>
            </div>
            <div className={styles.profile__posts}>
                {posts}
            </div>
        </div>
    )
}

export default Profile