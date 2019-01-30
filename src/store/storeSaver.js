import { ADD_CITY, REMOVE_CITY } from '../actions/citiesActions';

export const storeSaver = store => next => action => {
	if( action.type === ADD_CITY || action.type === REMOVE_CITY ){
		setTimeout(()=>{
			localStorage.setItem('savedStore', JSON.stringify(store.getState()) );
		}, 0);
		
	}

  	return next(action);
}

