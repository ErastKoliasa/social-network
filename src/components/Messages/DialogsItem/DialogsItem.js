import React from "react";
import styles from '../Messages.module.css'

const DialogsItem = (props) => {
    return (
        <div>
            <p className={styles.dialogsItem}>{props.messages}</p>
        </div>

    )
}

export default DialogsItem; 