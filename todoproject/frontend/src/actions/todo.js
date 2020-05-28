import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_TODO, DELETE_TODO, ADD_TODO, GET_ERRORS } from './types';


export const getToDo = () => (dispatch, getState) => {
    axios.get('api/items/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_TODO,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const deleteToDo = (id) => (dispatch, getState) => {
    axios.delete(`api/items/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteToDo: 'To Do Deleted' }));
            dispatch({
                type: DELETE_TODO,
                payload: id
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const addToDo = (item) => (dispatch, getState) => {
    axios.post('api/items/', item, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addToDo: 'To Do Added' }))
            dispatch({
                type: ADD_TODO,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}