import React from "react";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/messagesPageReducer";
import Messages from "./Messages";

const mapStateToProps = (state) => {
    return {
        conversation: state.messagesPage.conversationsData,
        dialogsItem: state.messagesPage.dialogsItemData,
        newMessageText: state.messagesPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => dispatch(sendMessageActionCreator()),
        messageChange: (text) => dispatch(updateNewMessageTextActionCreator(text))
    }
}

const AuthRedirectComponent = withAuthRedirect(Messages)

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default MessagesContainer; 