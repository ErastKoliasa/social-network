const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
    postsData: [
        { id: 1, post: "post 1" },
        { id: 2, post: "post 2" },
        { id: 3, post: "post 3" },
        { id: 4, post: "post 4" }
    ],
    newPostText: ""
}

const profilePageReducer = (state = initialState, action) => {
    const addNewPost = () => {
        const newPost = {
            id: 5,
            post: state.newPostText
        };
        state.postsData.push(newPost);
        updateNewPostText("");
    }

    const updateNewPostText = (newText) => state.newPostText = newText;

    switch (action.type) {
        case ADD_NEW_POST:
            addNewPost();
            return state;
        case UPDATE_NEW_POST_TEXT:
            updateNewPostText(action.newText);
            return state;
        default:
            return state;
    }
}

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profilePageReducer;