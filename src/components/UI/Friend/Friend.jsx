import React from 'react'
import styles from './Friend.module.css'

const Friend = ({children, ...props}) => {
    return (
        <div className={styles.friend}>
            <img src="https://html5css.ru/w3images/avatar2.png"/>
            <div className={styles.description}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.status}>{props.status}</div>
                <div className={styles.city}>{props.city}</div>
            </div>
            <div className={styles.btnWrapper}>
                { children }
            </div>
        </div>
    )
}

export default Friend