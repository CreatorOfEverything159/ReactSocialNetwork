import React from 'react';
import styles from './Profile.module.css'
import Post from "../Post/Post";

const Profile = (props) => {

    let postsData = [
        {id: 1, postMessage: "Hello!", likesCount: 16},
        {id: 2, postMessage: "Second post!", likesCount: 193},
    ]

    let posts = postsData.map(post => {
        return <Post message={post.postMessage} likesCount={post.likesCount}/>
    })

    return (
        <div className={styles.prfile}>
            <div className={styles.profile__header}></div>
            <div className={styles.profile__info}>
                <div className={styles.profile__avatar}>
                    <div className={styles.avatar__photo}>
                        <img src="https://html5css.ru/w3images/avatar2.png"/>
                    </div>
                    <div className={styles.profile__name}>Name Name</div>
                </div>
            </div>
            <div className={styles.profile__createPost}>
                <textarea name="" id="" cols="30" rows="10" placeholder="Что у вас нового?"></textarea>
                <button className={styles.profile__addPost}>Опубликовать</button>
            </div>
            <div className={styles.profile__posts}>
                {posts}
            </div>
        </div>
    )
}

export default Profile;