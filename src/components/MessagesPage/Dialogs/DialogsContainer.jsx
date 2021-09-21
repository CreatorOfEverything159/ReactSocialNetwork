import {connect} from "react-redux"
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs
    }
}

export default connect(mapStateToProps, {})(Dialogs)
