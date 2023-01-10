import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import authReducer from "./authReducer";
import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";
import thunk from "redux-thunk";
import appReducer from "./appReducer";

const reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    app: appReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;