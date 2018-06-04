import {combineReducers} from 'redux';
import scoreReducer from './score_reducer';

export default combineReducers({
    score: scoreReducer,
})