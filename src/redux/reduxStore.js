import { combineReducers, legacy_createStore as createStore } from "redux";
import authReducer from "./authReducer";
import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";

const reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer
})

const store = createStore(reducers);

export default store;