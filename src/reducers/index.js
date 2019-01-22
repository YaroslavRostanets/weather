import { combineReducers } from 'redux';
import cities from './cities';
import ui from './ui';

export const rootReducer = combineReducers({
  cities,
  ui
});