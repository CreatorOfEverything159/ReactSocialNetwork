import styles from "./Dialogs.module.css";
import React from "react";
import Dialog from "../Dialog/Dialog";
import Message from "../Message/Message";

const Dialogs = (props) => {

    let dialogs = props.state.dialogs.map(dialog => {
        return <Dialog name={dialog.name} id={dialog.id}/>
    })

    let messages = props.state.messages.map(message => {
        return <Message message={message.message}/>
    })

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs__items}>
                {dialogs}
            </div>
            <div className={styles.messages}>
                <h1 className={styles.dialog__title}>Name</h1>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs;