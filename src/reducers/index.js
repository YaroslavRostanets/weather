import { combineReducers } from 'redux';
import citiesReducer from './cities';

export const rootReducer = combineReducers({
  cities: citiesReducer
});