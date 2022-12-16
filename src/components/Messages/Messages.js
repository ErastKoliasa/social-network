import React, { createRef } from "react";
import styles from './Messages.module.css'
import Conversations from './Conversations/Conversations'
import DialogsItem from "./DialogsItem/DialogsItem";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/messagesPageReducer";

const Messages = (props) => {
    const conversation = props.messagesPage.conversationsData.map(data => <Conversations name={data.name} id={data.id} />)
    const dialogsItem = props.messagesPage.dialogsItemData.map(data => <DialogsItem messages={data.messages} />)

    const myMessage = React.createRef();

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    const onMessageChange = () => {
        const text = myMessage.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={styles.messages}>
            <div className={styles.conversations}>
                {conversation}
            </div>
            <div className={styles.dialogs}>
                {dialogsItem}
                <div>
                    <textarea ref={myMessage} onChange={onMessageChange} value={props.messagesPage.newMessageText}></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Messages; 