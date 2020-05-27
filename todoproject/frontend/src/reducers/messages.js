import { GET_MESSAGES, CREATE_MESSAGES } from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MESSAGES:
            return action.payload;
        case CREATE_MESSAGES:
            return (state = action.pay);
        default: return state;
    }
}