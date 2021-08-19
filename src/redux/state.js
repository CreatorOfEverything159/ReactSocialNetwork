import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, postMessage: "Hello!", likesCount: 16},
            {id: 2, postMessage: "Second post!", likesCount: 193},
        ],
    },

    dialogsPage: {
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "adfgsdfgsd"},
            {id: 3, message: "Hjhfghjghjfghi"},
            {id: 4, message: "Hfluyi"},
            {id: 5, message: "werrtghfdHi"},
        ],

        dialogs: [
            {id: 1, name: "Bkagw45y4mz"},
            {id: 2, name: "543252345"},
            {id: 3, name: "Bkagw45y4mz"},
            {id: 4, name: "u5kreherthd"},
            {id: 5, name: "2totyhdu76djhgsx"},
            {id: 6, name: "14321"},
            {id: 7, name: "3wterdf98"},
        ],
    },
}

export const addPost = (postMessage) => {
    let newPost = {
        id: Date.now(),
        postMessage: postMessage,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost)
    renderEntireTree(state)
}

export default state;