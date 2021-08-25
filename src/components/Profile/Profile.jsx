import React from 'react'
import styles from './Profile.module.css'
import CreatePostContainer from "../CreatePost/CreatePostContainer";
import Posts from "../Posts/Posts";

const Profile = (props) => {
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
            <Posts posts={props.store.getState().profilePage.posts}/>
        </div>
    )
}

export default Profile