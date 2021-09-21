import {connect} from "react-redux"
import CreateMessage from "./CreateMessage"
import {sendMessage, updateNewMessageText} from "../../../redux/messagesReducer"

let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText
    }
}

export default connect(mapStateToProps,
    {sendMessage, updateNewMessageText})(CreateMessage)
