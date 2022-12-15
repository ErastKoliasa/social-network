import React, { createRef } from "react";
import styles from './Messages.module.css'
import Conversations from './Conversations/Conversations'
import DialogsItem from "./DialogsItem/DialogsItem";

const Messages = (props) => {
    const conversation = props.messagesPage.conversationsData.map(data => <Conversations name={data.name} id={data.id} />)
    const dialogsItem = props.messagesPage.dialogsItemData.map(data => <DialogsItem messages={data.messages} />)
    
    const myMessage = React.createRef();
    const sendMessage = () => {
        alert(myMessage.current.value)
    }
    return (
        <div className={styles.messages}>
            <div className={styles.conversations}>
                {conversation}
            </div>
            <div className={styles.dialogs}>
                {dialogsItem}
                <textarea ref={myMessage}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Messages; 