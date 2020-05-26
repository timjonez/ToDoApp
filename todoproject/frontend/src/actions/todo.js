import axios from 'axios';

import { GET_TODO } from './types';


export const getToDo = () => dispatch => {
    axios.get('api/items/')
        .then(res => {
            dispatch({
                type: GET_TODO,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}