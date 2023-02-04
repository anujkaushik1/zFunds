import { composeWithDevTools } from "@redux-devtools/extension/";
import { combineReducers } from "redux";
import declarationDetailsReducer from "./declarationScreenReducer";
import personalDetailsReducer from "./personalDetailsReducer";

const rootReducer = combineReducers({
    personalDetailsReducer,
    declarationDetailsReducer
})

export default rootReducer;