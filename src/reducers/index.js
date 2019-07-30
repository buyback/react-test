import counterReducer from './counter';
import login_inputReducer from './login_input';
import loggedReducer from './isLogged';
import postingReducer from './posting';

import {
    combineReducers
} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    userData: login_inputReducer,
    postings: postingReducer
});

export default allReducers;