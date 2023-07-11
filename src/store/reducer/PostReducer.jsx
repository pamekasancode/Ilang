import { PostType } from "../types/PostType";

export const initPostState = {
    loading: true,
    page: 1,
    category: "found",
    data: []
}

export const PostReducer = (state = initPostState, action) => {
    switch (action.type) {
        case PostType.BEFORE_STATE:
            return {...state, initPostState}
        case PostType.SET_LOADING:
            return {...state, loading: true}
        case PostType.STOP_LOADING:
            return {...state, loading: false, page: 1}
        case PostType.SET_PAGE:
            return {...state, page: state.page + 1}
        case PostType.SET_DATA:
            return {...state, data:[...state.data, ...action.payload.data], loading: true}
        case PostType.CHANGE_CATEGORY:
            return {...state, data: [], category: action.payload.category, page: 1, loading: true}
        default:
            return state;
    }
}