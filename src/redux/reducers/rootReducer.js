import {LOGIN, REGISTER} from '../types/types';

const INIT_STATE = {
    token: null
}

const rootReducer = (state=INIT_STATE, action) => {
    switch(action.type) {
        case LOGIN:
            return {...state, token: action.token};
        case REGISTER:
            return {...state, token: action.token};
        default:
            return state;
    };
};

export default rootReducer;