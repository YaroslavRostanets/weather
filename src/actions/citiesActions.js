export const ADD_CITY = 'ADD_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';
export const SET_ACTIVE_CITY = 'SET_ACTIVE_CITY';
export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const SET_DETAIL_CITY = 'SET_DETAIL_CITY';

export function addCity(city) {
  return {
    type: ADD_CITY,
    payload: city,
  }
}

export function removeCity(listIndex) {
	return {
		type: REMOVE_CITY,
		payload: listIndex
	}
}

export function getWeatherNow(city) {
	return dispatch => {
		dispatch({
	    	type: GET_WEATHER_REQUEST
    	});

    	let api_key = '6df1ef1d951078e6cf82a1e62947f6f0';
    	let { lat, lng } = city.coordinates;
		
		fetch(`http://api.openweathermap.org/data/2.5/weather?
			lat=${lat}
			&lon=${lng}
			&units=metric
			&lang=ru
			&appid=${api_key}`)
		  	.then(function(response) {
				return response.json();
   			})
		    .then(function(weather) {
		    	console.log();
		    	dispatch({
        			type: GET_WEATHER_SUCCESS,
        			payload: weather,
        			uniqueId: city.uniqueId
      			});
		    })
		  	.catch( console.log );
	}
}

export function setDetailCity(detail) {
	console.log(detail);
	return {
		type: SET_DETAIL_CITY,
		payload: detail
	}
}