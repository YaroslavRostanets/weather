import { createStore, applyMiddleware } from 'redux';
import { rootReducer} from '../reducers';
import thunk from 'redux-thunk';
import { storeSaver } from './storeSaver';

const arg = [rootReducer, applyMiddleware(thunk, storeSaver)];
	if(localStorage.getItem('savedStore') !== null) {
		arg.splice(1,0,JSON.parse(localStorage.getItem('savedStore')));
	}
export const store = createStore.apply(null, arg);