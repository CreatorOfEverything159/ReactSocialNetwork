const ADD_POST = 'APP-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, postMessage: "Hello!", likesCount: 16},
        {id: 2, postMessage: "Second post!", likesCount: 193},
    ],
    newPostText: '',
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: Date.now(),
                postMessage: state.newPostText,
                likesCount: 0,
            }
            state.posts.push(newPost)
            state.newPostText = ''
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break;
    }

    return state
}

export const addPostActionCreator = () => {
    return { type: ADD_POST, }
}

export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text, }
}