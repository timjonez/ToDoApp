import axios from 'axios';
import { returnErrors } from './messages';

import { USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL } from './types';

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });

    const token = getState().auth.token;
    const config = {
        headers: { 'Content-Type': 'application/json' }
    }

    if (token) { config.headers['Authorization'] = `Token ${token}` }

    axios.get('/api/auth/user', config)
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({ type: AUTH_ERROR })
        })
}

export const login = (username, password) => dispatch => {
    const config = {
        headers: { 'Content-Type': 'application/json' }
    }

    const body = JSON.stringify({ username, password });

    axios.post('/api/auth/user', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({ type: LOGIN_FAIL })
        })
}