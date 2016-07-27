import axios from 'axios';

const API_KEY = 'f56bcb85ac938ef58a417bd402c8e1de';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	console.log('request:', request);

	// if the payload is a promise, it stops the action entirely- once the request finishes,
	// it dispatches a new action of the same type but with a paylod of the resolved request - BADASS
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}

