import { PostType } from "../types/PostType";

export const initPostState = {
    loading: true,
    page: 1,
    category: "lost",
    data: [],
    isCreated: false,
    createError: []
}

export const PostReducer = (state = initPostState, action) => {
    switch (action.type) {
        case PostType.BEFORE_STATE:
            return {...state, isCreated: false, data: [], createError: [], loading: true, page: 1}
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
        case PostType.CREATED:
            return {...state, isCreated: true}
        case PostType.CREATE_FAIL:
            return {...state, isCreated: false}
        case PostType.ERROR_CREATE:
            return {...state, isCreated: false, createError: action.payload.createError}
        default:
            return state;
    }
}