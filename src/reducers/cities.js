const initialState = {
	citiesList: [
		{
			'name': 'Киев',
			'coordinates': {
				'lat': 10,
				'lon': 10
			}
		},
		{
			'name': 'Хельсинки',
			'coordinates': {
				'lat': 10,
				'lon': 10
			}
		},
	],
	activeCityIndex: null
}

export default function cities(state = initialState, action) {
	switch(action.type) {
		case 'ADD_CITY':
			return {...state, citiesList: [...state.citiesList, action.payload] };

		default: 
			return state;
	}

	
}