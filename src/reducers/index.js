import { combineReducers } from "redux";
import { loginReducer, registerReducer } from "./user";

const rootReducer = combineReducers({ loginReducer, registerReducer });

export default rootReducer;
