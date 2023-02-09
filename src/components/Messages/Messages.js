import React from "react";
import styles from './Messages.module.css'
import Conversations from './Conversations/Conversations'
import DialogsItem from "./DialogsItem/DialogsItem";
import { Field, Form } from "react-final-form";
import { TextArea } from "../common/FormsControls/FormsControls";
import { composeValidators, maxLength, required } from "../../utils/validators/validators";

const AddMessageForm = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="message" component={TextArea}
                            placeholder="Enter your message"
                            validate={composeValidators(required, maxLength(240))} 
                            className={styles.messageInput}/>
                    </div>
                    <div>
                        <button className={styles.btnSend}>Send</button>
                    </div>
                </form>
            )}
        </Form>
    )
}

const Messages = (props) => {
    const conversation = props.conversation.map(data => <Conversations name={data.name} key={data.id} id={data.id} />)
    const dialogsItem = props.dialogsItem.map(data => <DialogsItem messages={data.messages} key={data.id} />)

    const addNewMessage = (value) => {
        props.sendMessage(value.message);
    }

    return (
        <div className={styles.messages}>
            <div className={styles.conversations}>
                {conversation}
            </div>
            <div className={styles.dialogs}>
                {dialogsItem}
                <div>
                    <AddMessageForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
}

export default Messages; 