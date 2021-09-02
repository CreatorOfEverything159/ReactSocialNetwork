import React from 'react'
import Textarea from "../../UI/Textarea/Textarea"
import Button from "../../UI/Button/Button"
import styles from './CreateMessage.module.css'

const CreateMessage = (props) => {

    let newMessageElement = React.createRef()

    const onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateNewMessageText(text)
    }

    const onSendMessage = () => {
        props.sendMessage()
    }

    return (
        <div className={styles.createMessage}>
            <Textarea
                ref={newMessageElement}
                onChange={onMessageChange}
                value={props.newMessageText}
                placeholder="Напишите сообщение..."/>
            <Button onClick={onSendMessage}>Отправить</Button>
        </div>
    )
}

export default CreateMessage