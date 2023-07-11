import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { PostReducer } from "./PostReducer";

const reducer = combineReducers({
    Auth: AuthReducer,
    Post: PostReducer
})

export default reducer;