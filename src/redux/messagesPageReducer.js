const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
    conversationsData: [
        { id: 1, name: "Taras" },
        { id: 2, name: "Nikita" },
        { id: 3, name: "Roman" }
    ],
    dialogsItemData: [
        { id: 1, messages: "Hello!" },
        { id: 2, messages: "Hi!" },
        { id: 3, messages: "What are you doing?" }
    ],
    newMessageText: ""
}

const messagesPageReducer = (state = initialState, action) => {
    const sendMessage = () => {
        const newMessage = {
            id: 4,
            messages: state.newMessageText
        }
        state.dialogsItemData.push(newMessage);
        updateNewMessageText("");
    }

    const updateNewMessageText = (newText) => state.newMessageText = newText;

    switch (action.type) {
        case SEND_MESSAGE:
            sendMessage();
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            updateNewMessageText(action.newText);
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});

export default messagesPageReducer;