import React from 'react'
import styles from './Textarea.module.css'

const Textarea = React.forwardRef((props, ref) => {
    return (
        <textarea ref={ref} className={styles.textarea} {...props}/>
    )
})

export default Textarea