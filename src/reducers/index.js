import {
    combineReducers
} from 'redux';
import login from './login';
import register from './register';
import user from './user';
import resident from './residents';
import visitor from './visitors';

const rootReducers = combineReducers({
    login,
    register,
    user,
    resident,
    visitor
})

export default rootReducers;