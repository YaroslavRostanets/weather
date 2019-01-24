import { combineReducers } from 'redux';
import citiesReducer from './cities';
import uiReducer from './ui';

export const rootReducer = combineReducers({
  cities: citiesReducer,
  ui: uiReducer
});