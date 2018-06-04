import types from '../actions/types';
const DEFAULT_STATE = {
    attempts: 0,
    matches:0,
};

export default function (state = DEFAULT_STATE, action) {

    switch (action.type){
        case types.INCREMENT_ATTEMPTS:
            return {...state, attempts: action.payload};
        case types.INCREMENT_MATCHES:
            return {...state, matches: action.payload};

        default:
            return state
    }
}