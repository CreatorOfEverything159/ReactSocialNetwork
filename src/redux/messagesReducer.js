const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    messages: [
        {id: 1, message: "Жизнь можно сравнить с тем, что происходит, когда мы пытаемся объяснить, например, явление электрического тока"},
        {id: 2, message: "рок, музыка, песни, песня, русский рок, рок-музыка, рок песни, клипы, хиты, лучшие песни, русский, слушать, все, 2015, 2016, новинки, скачать, бесплатно, без регистрации, аккорды, mp3, текст, guitar, string, басс, текст, аккорды бас, песня под гитару, рок с аккордами, аккорды песни под гитару, популярные песни, видео, новинки шансона, ютуб, песни для детей, популярные, новые, хит, смотреть, онлайн, самые, детские песни, хиты 2013, 2014,"},
        {id: 3, message: "эдди брок, джон трамп и майлс джереми в фильме"},
        {id: 4, message: "хех, я тоже буду скучать с:"},
        {id: 5, message: "вэф, я тебе говорю, чтобы ты никогда не смотрела в сторону этого телефона. почему? потому" +
                " что он будет у тебя через пару месяцев после того, как ты его купишь. ты меня поняла с:"},
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

export const updateNewMessageTextAC = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
}

export const sendMessageAC = () => {
    return { type: SEND_MESSAGE }
}