import { profileAPI } from "../api/profileAPI";

const ADD_NEW_POST = "profile/ADD-NEW-POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS";

const initialState = {
    postsData: [
        { id: 1, post: "post 1" },
        { id: 2, post: "post 2" },
        { id: 3, post: "post 3" },
        { id: 4, post: "post 4" }
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
                postsData: [...state.postsData, newPost ],
            }
        };
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case SAVE_PHOTO_SUCCESS: {
            return { ...state, profile: {...state.profile, photos: action.photos} }
        }
        default:
            return state;
    }
}

export const addNewPostActionCreator = (post) => ({ type: ADD_NEW_POST, post });
export const setUserProfileActionCreator = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatusActionCreator = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccessActionCreator = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfileThunkCreator = (userId) => {
    return async (dispatch) => {
        const data = await profileAPI.getProfile(userId);
        dispatch(setUserProfileActionCreator(data));
    }
}

export const getStatusThunkCreator = (userId) => {
    return async (dispatch) => {
        const data = await profileAPI.getStatus(userId);
        dispatch(setStatusActionCreator(data));
    }
}

export const updateStatusThunkCreator = (status) => {
    return async (dispatch) => {
        const data = await profileAPI.updateStatus(status);
        if (data.resulCode === 0) {
            dispatch(setStatusActionCreator(status));
        }
    }
}
export const savePhotoThunkcreator = (file) => {
    return async (dispatch) => {
        const data = await profileAPI.savePhoto(file);
        if (data.resulCode === 0) {
            dispatch(savePhotoSuccessActionCreator(data.photos));
        }
    }
}
export const saveProfileThunkcreator = (profile) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId;
        const data = await profileAPI.saveProfile(profile);
        if (data.resulCode === 0) {
            dispatch(getUserProfileThunkCreator(userId));
        }
    }
}

export default profilePageReducer;