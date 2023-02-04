import { composeWithDevTools } from "@redux-devtools/extension/";
import { combineReducers } from "redux";
import personalDetailsReducer from "./personalDetailsReducer";

const rootReducer = combineReducers({
    personalDetailsReducer
})

export default rootReducer;