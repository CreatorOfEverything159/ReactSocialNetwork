import styles from "./Dialogs.module.css"
import React from "react"
import Dialog from "../Dialog/Dialog"
import Message from "../Message/Message"
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogReducer";

const Dialogs = (props) => {

    const dialogs = props.dialogsPage.dialogs.map(dialog => {
        return <Dialog name={dialog.name} id={dialog.id}/>
    })

    const messages = props.dialogsPage.messages.map(message => {
        return <Message message={message.message}/>
    })

    let newMessageElement = React.createRef()

    const onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs__items}>
                { dialogs }
            </div>
            <div className={styles.messages}>
                <h1 className={styles.dialog__title}>Name</h1>
                { messages }
            </div>
            <div className={styles.profile__createMessage}>
                <textarea
                    ref={newMessageElement}
                    onChange={onMessageChange}
                    value={props.dialogsPage.newMessageText}
                    placeholder="Напишите сообщение..."/>
                <button onClick={ sendMessage } className={styles.profile__sendMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs