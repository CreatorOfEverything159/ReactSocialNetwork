import styles from "./Dialog.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <NavLink className={styles.dialog} to={path}>{props.name}</NavLink>
    )
}

export default Dialog;