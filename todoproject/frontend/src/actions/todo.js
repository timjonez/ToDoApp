import axios from 'axios';

import { GET_TODO, DELETE_TODO, ADD_TODO } from './types';


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

export const deleteToDo = (id) => dispatch => {
    axios.delete(`api/items/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_TODO,
                payload: id
            });
        })
        .catch(err => console.log(err));
}

export const addToDo = (item) => dispatch => {
    axios.post('api/items/', item)
        .then(res => {
            dispatch({
                type: ADD_TODO,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}