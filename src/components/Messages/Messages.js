import React from "react";
import styles from './Messages.module.css'
import Conversations from './Conversations/Conversations'
import DialogsItem from "./DialogsItem/DialogsItem";

const Messages = (props) => {
    const conversation = props.state.conversationsData.map(data => <Conversations name={data.name} id={data.id} />)
    const dialogsItem = props.state.dialogsItemData.map(data => <DialogsItem messages={data.messages} />)
    return (
        <div className={styles.messages}>
            <div className={styles.conversations}>
                {conversation}
            </div>
            <div className={styles.dialogs}>
                {dialogsItem}
            </div>
        </div>
    )
}

export default Messages; 