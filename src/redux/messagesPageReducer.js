const SEND_MESSAGE = "SEND-MESSAGE";

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
}

const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: 4,
                messages: action.message
            }
            return {
                ...state,
                dialogsItemData: [...state.dialogsItemData, newMessage],
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = (message) => ({ type: SEND_MESSAGE, message });

export default messagesPageReducer;