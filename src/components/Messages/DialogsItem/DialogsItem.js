import React from "react";
import styles from '../Messages.module.css'

const DialogsItem = (props) => {
    return (
        <p className={styles.dialogsItem}>{props.messages}</p>
    )
}

export default DialogsItem; 