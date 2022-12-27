import React from "react";
import { connect } from "react-redux";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/messagesPageReducer";
import Messages from "./Messages";

const mapStateToProps = (state) => {
    return {
        conversation: state.messagesPage.conversationsData,
        dialogsItem: state.messagesPage.dialogsItemData,
        newMessageText: state.messagesPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => dispatch(sendMessageActionCreator()),
        messageChange: (text) => dispatch(updateNewMessageTextActionCreator(text))
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer; 