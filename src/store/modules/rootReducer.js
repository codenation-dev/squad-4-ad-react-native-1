import {combineReducers} from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import devs from './devs/reducer';

export default combineReducers({auth, user, devs});
