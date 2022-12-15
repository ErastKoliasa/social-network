const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const store = {
    _state: {
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
    },

    _rerenderTree: '',

    _addNewPost() {
        const newPost = {
            id: 5,
            post: this._state.profilePage.newPostText
        };
        this._state.profilePage.postsData.push(newPost);
        this._updateNewPostText("");
    },

    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderTree(this._state);
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._rerenderTree = observer;
    },

    dispatch(action) {
        debugger
        if (action.type === ADD_NEW_POST) {
            this._addNewPost();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText);
        }
    }

}

export const addNewPostActionCreator = () => ({ type: "ADD-NEW-POST" })

export const updateNewPostTextActionCreator = (text) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: text
})

export default store