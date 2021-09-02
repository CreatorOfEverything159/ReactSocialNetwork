import styles from "./MessagesPage.module.css"
import React from "react"
import CreateMessageContainer from "./CreateMessage/CreateMessageContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import MessagesContainer from "./Messages/MessagesContainer";

const MessagesPage = (props) => {

    return (
        <div className={styles.dialogs}>
            <DialogsContainer store={props.store}/>
            <MessagesContainer store={props.store}/>
            <CreateMessageContainer store={props.store}/>
        </div>
    )
}

export default MessagesPage