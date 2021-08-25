import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profileReducer";
import CreatePost from "./CreatePost";

const CreatePostContainer = (props) => {

    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <CreatePost
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    );
};

export default CreatePostContainer;