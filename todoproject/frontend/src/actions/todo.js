import axios from 'axios';
import { createMessage } from './messages';

import { GET_TODO, DELETE_TODO, ADD_TODO, GET_ERRORS } from './types';


export const getToDo = () => dispatch => {
    axios.get('api/items/')
        .then(res => {
            dispatch({ addToDo: "To Do Added" })
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
            dispatch(createMessage({ deleteToDo: 'Lead Added' }));
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
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        });
}