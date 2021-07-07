import {LOGIN, REGISTER} from '../types/types';

//good old redux set up

export const login = (token) => {
    return (async (dispatch) => {
        return dispatch(loginSite(token));
    });
}

const loginSite = (token) => {
    return {
        type: LOGIN, token
    };
}


export const register = (token) => {
    return (async (dispatch) => {
        return dispatch(registerSite(token));
    });
}

const registerSite = (token) => {
    return {
        type: REGISTER, token
    };
}