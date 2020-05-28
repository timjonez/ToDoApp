import { USER_LOADED, USER_LOADING, AUTH_ERROR } from '../actions/types';

const initailState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null
};

export default function (state = initailState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated,
                isLoading,
                user: action.payload
            }
        case AUTH_ERROR:
            localStorage.removeItem("token");
            return {
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        default:
            return state;
    }
}