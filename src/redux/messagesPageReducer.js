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
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: 4,
                messages: state.newMessageText
            }
            return {
                ...state,
                dialogsItemData: [...state.dialogsItemData, newMessage],
                newMessageText: ""
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
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