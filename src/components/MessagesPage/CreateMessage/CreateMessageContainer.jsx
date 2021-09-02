import {connect} from "react-redux"
import CreateMessage from "./CreateMessage"
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/messagesReducer"

let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

const CreateMessageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateMessage)

export default CreateMessageContainer