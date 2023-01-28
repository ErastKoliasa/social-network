import { getAuthUserDataThunkCreator } from "./authReducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return{...state, initialized: true}
        }
        default:
            return state;
    }
}

export const initializedSuccessActionCreator = () => ({ type: INITIALIZED_SUCCESS});

export const initializeAppThunkCreator = () => {
    return (dispatch) => {
        const promise = dispatch(getAuthUserDataThunkCreator());
        promise.then(() => {
            dispatch(initializedSuccessActionCreator());
        });
    }
}

export default appReducer;