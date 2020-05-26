import { GET_TODO } from '../actions/types.js';

const initialState = {
    todo: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TODO:
            return {
                ...state,
                todo: action.payload
            }
        default:
            return state;
    }
}