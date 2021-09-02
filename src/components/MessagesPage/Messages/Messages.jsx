import React from 'react'
import styles from "./Messages.module.css"
import Message from "../Message/Message"
const Messages = (props) => {

    const messages = props.messages.map(message => {
        return <Message message={message.message} key={message.id}/>
    })

    return (
        <div className={styles.messages}>
            <h1 className={styles.dialog__title}>Name</h1>
            { messages }
        </div>
    )
}

export default Messages