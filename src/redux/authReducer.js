import { authAPI } from "../api/authAPI";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return{...state, ...action.data, isAuth: true}
        }
        default:
            return state;
    }
}

export const setAuthUserDataActionCreator = (userId, email, login) => ({ type: SET_AUTH_USER_DATA, data:{userId, email, login} });

export const getAuthUserDataThunkCreator = () => {
    return (dispatch) => {
        authAPI.getAuth().then(data => {
            const { id, email, login } = data.data;
            if (data.resultCode === 0) {
                dispatch(setAuthUserDataActionCreator(id, email, login))
            }
        })
    }
}


export default authReducer;