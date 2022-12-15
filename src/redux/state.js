let rerenderTree;
const state = {
    profilePage: {
        postsData: [
            { id: 1, post: "post 1" },
            { id: 2, post: "post 2" },
            { id: 3, post: "post 3" },
            { id: 4, post: "post 4" }
        ],
        newPostText: ""
    },
    messagesPage: {
        conversationsData: [
            { id: 1, name: "Taras" },
            { id: 2, name: "Nikita" },
            { id: 3, name: "Roman" }
        ],
        dialogsItemData: [
            { id: 1, messages: "Hello!" },
            { id: 2, messages: "Hi!" },
            { id: 3, messages: "What are you doing?" }
        ]
    }
}

export const addNewPost = () => {
    const newPost = {
        id: 5,
        post: state.profilePage.newPostText
    };
    state.profilePage.postsData.push(newPost);
    updateNewPostText("");
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderTree(state);
}

export const subscribe = (observer) => {
    rerenderTree = observer;
}

export default state