import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import contactReducer from "./reducer/contactReducer";
import { Contact } from "./types/contactType";


const rootReducer= combineReducers({
  contact: contactReducer,
});

const store = legacy_createStore(rootReducer);

export default store;
