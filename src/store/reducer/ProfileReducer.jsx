import { ProfileType } from "../types/ProfileType";

export const initProfileState = {
    profile: [],
    posts: [],
    loading: true,
    page: 1 
}

export const ProfileReducer = (state = initProfileState, action) => {
    switch (action.type) {
        case ProfileType.BEFORE_STATE:
            return {...state, profile: [], posts: [], loading: true, page: 1}
        case ProfileType.SET_LOADING:
            return {...state, loading: true}
        case ProfileType.STOP_LOADING:
            return {...state, loading: false}
        case ProfileType.SET_PAGE:
            return {...state, page: state.page + 1}
        case ProfileType.SET_PROFILE:
            return {...state, profile: action.payload.profile}
        case ProfileType.SET_POSTS:
            return {...state, posts: [...state.posts, ...action.payload.posts], loading: true}
        default:
            return {...state}
    }
}