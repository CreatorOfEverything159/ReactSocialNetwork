import React from 'react'
import styles from './ProfilePage.module.css'
import CreatePostContainer from "./CreatePost/CreatePostContainer"
import PostsContainer from "./Posts/PostsContainer"

const ProfilePage = (props) => {
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
            <CreatePostContainer store={props.store}/>
            <PostsContainer store={props.store}/>
        </div>
    )
}

export default ProfilePage