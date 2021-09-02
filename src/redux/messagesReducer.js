const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

export const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        case SEND_MESSAGE:
            let message = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, { id: Date.now(), message: message }],
            }
        default:
            return state
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
}

export const sendMessageActionCreator = () => {
    return { type: SEND_MESSAGE }
}