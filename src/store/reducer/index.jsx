import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { PostReducer } from "./PostReducer";
import { ProfileReducer } from "./ProfileReducer";

const reducer = combineReducers({
    Auth: AuthReducer,
    Post: PostReducer,
    Profile: ProfileReducer
})

export default reducer;