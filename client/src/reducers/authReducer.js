import { FETCH_USER } from '../actions/types';

//if empty string for case FETCH_USER, return false
// thats what || false is for

export default function(state = null, action) {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;
		default:
			return state;
	}
}