import { ADD_CITY, 
		 REMOVE_CITY, 
		 /*GET_WEATHER_REQUEST, */
		 GET_WEATHER_SUCCESS,
		 SET_DETAIL_CITY } from '../actions/citiesActions';

const initialState = {
	citiesList: [{
		name: 'Киев',
		coordinates: {lat: 50.4501, lng: 30.523400000000038},
		uniqueId: Symbol()
	}],
	detailCity: null,
	
}

export default function citiesReducer(state = initialState, action) {
	const copy = [...state.citiesList];

	switch(action.type) {
		case ADD_CITY:
			return {...state, citiesList: [...state.citiesList, action.payload] };
		case REMOVE_CITY:
				copy.splice(action.payload, 1);
			return {...state, citiesList: copy };
		case GET_WEATHER_SUCCESS:
			copy.some(function(item, index){
				if(item.uniqueId === action.uniqueId) {
					copy.splice(index, 1, {...item, weather: action.payload});
					return true; //оставливаем перебор если Id совпадают 
				}
				return false;
			});
			return {...state, citiesList: copy}
		case SET_DETAIL_CITY:
			return {...state, detailCity: action.payload}
		default: 
			return state;
	}

}