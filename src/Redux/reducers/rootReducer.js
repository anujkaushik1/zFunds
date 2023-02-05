import { composeWithDevTools } from "@redux-devtools/extension/";
import { combineReducers } from "redux";
import declarationDetailsReducer from "./declarationScreenReducer";
import personalDetailsReducer from "./personalDetailsReducer";

// Combining the individual reducers into a single root reducer

const rootReducer = combineReducers({
    personalDetailsReducer,
    declarationDetailsReducer
})

export default rootReducer;