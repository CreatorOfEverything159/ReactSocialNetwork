import {connect} from "react-redux"
import CreateMessage from "./CreateMessage"
import {sendMessageAC, updateNewMessageTextAC} from "../../../redux/messagesReducer"

let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextAC(text))
        }
    }
}

const CreateMessageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateMessage)

export default CreateMessageContainer