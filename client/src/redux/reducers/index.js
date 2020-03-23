import { combineReducers } from 'redux';

import { gameReducer } from './gameReducer';
import { rankReducer } from './rankReducer';

export default combineReducers({
  gameReducer,
  rankReducer
});
