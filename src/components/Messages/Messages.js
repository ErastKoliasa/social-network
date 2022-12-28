import React, { createRef } from "react";
import styles from './Messages.module.css'
import Conversations from './Conversations/Conversations'
import DialogsItem from "./DialogsItem/DialogsItem";

const Messages = (props) => {
    const conversation = props.conversation.map(data => <Conversations name={data.name} key={data.id} id={data.id} />)
    const dialogsItem = props.dialogsItem.map(data => <DialogsItem messages={data.messages} key={data.id}/>)

    const myMessage = React.createRef();

    const onSendMessage = () => {
        props.sendMessage();
    }

    const onMessageChange = () => {
        const text = myMessage.current.value;
        props.messageChange(text);
    }

    return (
        <div className={styles.messages}>
            <div className={styles.conversations}>
                {conversation}
            </div>
            <div className={styles.dialogs}>
                {dialogsItem}
                <div>
                    <textarea ref={myMessage} onChange={onMessageChange} value={props.newMessageText}></textarea>
                    <button onClick={onSendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Messages; 