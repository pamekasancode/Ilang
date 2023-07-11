import { AuthType } from "../types/AuthType";

export const initAuthState = {
    isAuthenticated: false,
    loginMessage: false,
    isRegistered: false,
    registerAlert: false,
    errorRegister: [],
}

export const AuthReducer = (state = initAuthState, action) => {
    switch (action.type) {
        case AuthType.BEFORE_STATE:
            return {...state, isRegistered: false, errorRegister: []}
        case AuthType.AUTHENTICATED:
            return {...state, isAuthenticated: true}
        case AuthType.LOGIN_INVALID:
            return {...state, isAuthenticated: false, loginMessage: true}
        case AuthType.REGISTERED:
            return {...state, isRegistered: true, errorRegister: []}
        case AuthType.ERROR_REGISTER:
            return {...state, isRegistered: false, errorRegister: action.payload.errorRegister}
        case AuthType.FAIL_REGISTER:
            return {...state, isRegistered: false, registerAlert: true}
        default:
            return state
    }
} 