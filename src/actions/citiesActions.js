const API_KEY = '6df1ef1d951078e6cf82a1e62947f6f0';
export const ADD_CITY = 'ADD_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';
export const SET_ACTIVE_CITY = 'SET_ACTIVE_CITY';
export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const SET_DETAIL_CITY = 'SET_DETAIL_CITY';
export const GET_FORECAST_REQUEST = 'GET_FORECAST_REQUEST';
export const GET_FORECAST_SUCCESS = 'GET_FORECAST_SUCCESS';

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

    	let { lat, lng } = city.coordinates;
		
		fetch(`http://api.openweathermap.org/data/2.5/weather?
			lat=${lat}
			&lon=${lng}
			&units=metric
			&lang=ru
			&appid=${API_KEY}`)
		  	.then(function(response) {
				return response.json();
   			})
		    .then(function(weather) {
		    	dispatch({
        			type: GET_WEATHER_SUCCESS,
        			payload: weather,
        			uniqueId: city.uniqueId
      			});
		    })
		  	.catch( console.log );
	}
}

export function setDetailCity(uniqueId) {
	return {
		type: SET_DETAIL_CITY,
		payload: uniqueId
	}
}

export function getForecast(city) {
	console.log('city: ', city);
	return dispatch => {
		dispatch({
	    	type: GET_FORECAST_REQUEST
    	});

    	let { lat, lng } = city.coordinates;
		
		fetch(`http://api.openweathermap.org/data/2.5/forecast?
			lat=${lat}
			&lon=${lng}
			&units=metric
			&lang=ru
			&appid=${API_KEY}`)
		  	.then(function(response) {
				return response.json();
   			})
		    .then(function(forecast) {
		    	let forecastDays = {};  //Сортируем по дням
		    	let today = new Date().getDay();
		    	forecast.list.forEach((item,i)=>{
		    		let day = new Date( Number(item.dt + '000') ).getDay();
		    		if (day !== today) {
		    			if ( Array.isArray(forecastDays[day]) ){
		    				forecastDays[day].push(item);
		    			} else {
							forecastDays[day] = new Array();
							forecastDays[day].push(item);
		    			}
		    			
		    		}
		    	});
		    	console.log(forecastDays);
		    	dispatch({
        			type: GET_FORECAST_SUCCESS,
        			payload: forecastDays,
        			uniqueId: city.uniqueId
      			});
		    })
		  	.catch( console.log );
	}

}