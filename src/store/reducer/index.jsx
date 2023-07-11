import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";

const reducer = combineReducers({
    Auth: AuthReducer
})

export default reducer;