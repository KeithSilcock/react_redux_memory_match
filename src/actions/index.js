import types from './types';

export function incrementAttempts(attempts) {
    return {
        type: types.INCREMENT_ATTEMPTS,
        payload: ++attempts
    }
}
export function incrementMatches(matches) {
    return {
        type: types.INCREMENT_MATCHES,
        payload: ++matches
    }
}