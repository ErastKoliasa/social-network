import { profileAPI } from "../api/profileAPI";

const ADD_NEW_POST = "ADD-NEW-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
    postsData: [
        { id: 4, post: "post 4" },
        { id: 3, post: "post 3" },
        { id: 2, post: "post 2" },
        { id: 1, post: "post 1" }
    ],
    profile: null,
    status: ""
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST: {
            const newPost = {
                id: 5,
                post: action.post
            };
            return {
                ...state,
                postsData: [newPost, ...state.postsData],
            }
        };
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        default:
            return state;
    }
}

export const addNewPostActionCreator = (post) => ({ type: ADD_NEW_POST, post});
export const setUserProfileActionCreator = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatusActionCreator = (status) => ({ type: SET_STATUS, status });

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfileActionCreator(data));
        });
    }
}

export const getStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatusActionCreator(data));
        });
    }
}

export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resulCode === 0) {
                dispatch(setStatusActionCreator(status));
            }
        });
    }
}

export default profilePageReducer;