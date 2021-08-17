import styles from "./Dialogs.module.css";
import React from "react";
import Dialog from "../Dialog/Dialog";
import Message from "../Message/Message";
import {Route} from "react-router-dom";

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: "Bkagw45y4mz"},
        {id: 2, name: "543252345"},
        {id: 3, name: "Bkagw45y4mz"},
        {id: 4, name: "u5kreherthd"},
        {id: 5, name: "2totyhdu76djhgsx"},
        {id: 6, name: "14321"},
        {id: 7, name: "3wterdf98"},
    ]

    let dialogs = dialogsData.map(dialog => {
        return <Dialog name={dialog.name} id={dialog.id}/>
    })

    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "adfgsdfgsd"},
        {id: 3, message: "Hjhfghjghjfghi"},
        {id: 4, message: "Hfluyi"},
        {id: 5, message: "werrtghfdHi"},
    ]

    let messages = messagesData.map(message => {
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