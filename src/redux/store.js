import {profileReducer} from "./profileReducer"
import {messagesReducer} from "./messagesReducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, postMessage: "Hello!", likesCount: 16},
                {id: 2, postMessage: "Second post!", likesCount: 193},
            ],
            newPostText: '',
        },

        messagesPage: {
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

            newMessageText: '',
        },
    },

    getState() {
        return this._state
    },

    _callSubscriber() {},

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state)
    }
}

window.store = store

export default store