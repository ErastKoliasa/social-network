import { combineReducers, legacy_createStore as createStore } from "redux";
import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";

const reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer
})

const store = createStore(reducers);

export default store;