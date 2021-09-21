const ADD_POST = 'APP-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, postMessage: "лес ник увидел, как лиса волочит по полю лису. он подумал, что лиса больна и решил ее" +
                " лечить. нашел большую черепаху, разрезал ее пополам, положил лису внутрь черепахи и подумал, что скоро вылечит лису. через неделю он позвал лису: «иди сюда, я вылечил тебя». лиса спросила: «а где вторая половина?» «Я склеил ее, когда держал внутри тебя»", likesCount: 16},
        {id: 2, postMessage: "лес. я его боюсь.", likesCount: 193},
        {id: Date.now(), postMessage: "лес - это место, где я могу поговорить с природой, если хочу поболтать с" +
                " людьми, я иду к людям...", likesCount: 10742},
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
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }

}

export const addPost = () => {
    return { type: ADD_POST }
}

export const updateNewPostText = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}
