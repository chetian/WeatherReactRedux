/**
 * Created by dchetian on 7/26/16.
 */
import { FETCH_WEATHER } from '../actions/index';


// the payload is contained inside the action
export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER: {
			// never mutate/manipulate the state so approach it like this
			// concat returns a new instance of the array, doesn't manipulate
			// ES5 way: return state.concat([ action.payload.data ]);

			// ES6 method: make a new array, put action.data inside of it, and then take ...state takes all entries
			return [ action.payload.data, ...state]
		}
	}
	console.log("action received:", action);
	return state;
}