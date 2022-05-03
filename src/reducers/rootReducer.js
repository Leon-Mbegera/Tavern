import { combineReducers } from "redux";
import allReducer from "./allReducer";

const rootReducer = combineReducers({ cocktails: allReducer });
export default rootReducer;
