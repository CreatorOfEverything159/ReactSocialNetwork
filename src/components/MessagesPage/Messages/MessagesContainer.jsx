import {connect} from "react-redux"
import Messages from "./Messages";

let mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages
    }
}

export default connect(mapStateToProps, {})(Messages)
