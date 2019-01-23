import { combineReducers } from 'redux';

// We can multiple reducer files and export as universal state
import itemReducer from './itemReducer';

export default combineReducers({
  item: itemReducer
});
