import axios from 'axios';
import { createMessage, returnErrors } from './messages';

import { GET_TODO, DELETE_TODO, ADD_TODO, GET_ERRORS } from './types';


export const getToDo = () => dispatch => {
    axios.get('api/items/')
        .then(res => {
            dispatch({
                type: GET_TODO,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const deleteToDo = (id) => dispatch => {
    axios.delete(`api/items/${id}`)
        .then(res => {
            dispatch(createMessage({ deleteToDo: 'To Do Deleted' }));
            dispatch({
                type: DELETE_TODO,
                payload: id
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const addToDo = (item) => dispatch => {
    axios.post('api/items/', item)
        .then(res => {
            dispatch(createMessage({ addToDo: 'To Do Added' }))
            dispatch({
                type: ADD_TODO,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}