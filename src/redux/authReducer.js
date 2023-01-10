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
            return{...state, ...action.data}
        }
        default:
            return state;
    }
}

export const setAuthUserDataActionCreator = (userId, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, data:{userId, email, login, isAuth} });

export const getAuthUserDataThunkCreator = () => {
    return (dispatch) => {
        return authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                const { id, email, login } = data.data;
                dispatch(setAuthUserDataActionCreator(id, email, login, true))
            }
        })
    }
}

export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserDataThunkCreator())
            }
        })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserDataActionCreator(null, null, null, false))
            }
        })
    }
}

export default authReducer;