import React from 'react'
import styles from './Profile.module.css'
import Posts from "../Posts/Posts";
import CreatePost from "../CreatePost/CreatePost";

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
            <CreatePost newPostText={props.profilePage.newPostText} dispatch={props.dispatch}/>
            <Posts posts={props.profilePage.posts}/>
        </div>
    )
}

export default Profile