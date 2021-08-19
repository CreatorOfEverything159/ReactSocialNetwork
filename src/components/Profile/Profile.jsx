import React from 'react';
import styles from './Profile.module.css'
import Post from "../Post/Post";

const Profile = (props) => {

    let posts = props.state.posts.map(post => {
        return <Post message={post.postMessage} likesCount={post.likesCount}/>
    })

    let newPostElement = React.createRef()

    const addPost = () => {
        props.addPost(newPostElement.current.value)
        newPostElement.current.value = ''
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
                <textarea ref={newPostElement} name="" id="" cols="30" rows="10" placeholder="Что у вас нового?"/>
                <button onClick={ addPost } className={styles.profile__addPost}>Опубликовать</button>
            </div>
            <div className={styles.profile__posts}>
                {posts}
            </div>
        </div>
    )
}

export default Profile;