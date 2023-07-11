import { AuthType } from "../types/AuthType";

export const initAuthState = {
    isAuthenticated: false,
    loginMessage: false,
}

export const AuthReducer = (state = initAuthState, action) => {
    switch (action.type) {
        case AuthType.AUTHENTICATED:
            return {...state, isAuthenticated: true}
        case AuthType.LOGIN_INVALID:
            return {...state, isAuthenticated: false, loginMessage: true}
        default:
            return state
    }
} 