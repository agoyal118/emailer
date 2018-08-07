import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

//usually we would do something like this
//const request = axios.get('/api/current_user');
//return {
//			type: FETCH_USER,
//			payload: request
//	};
//};
//but with redux thunk we will skip this step
//and directly communciate with redux's
// dispatch function
// if redux thunk sees that we are passing in a
// function, it will automatically pass dispatch
// as an argument or parameter of that function

//this function is equivalent to bottom function
/*
export const fetchUser = () => {
	return function(dispatch) => {
		axios
			.get('/api/current_user')
			.then(res => dispatch({ type: FETCH_USER, payload: res}));
	};
};

*/


export const fetchUser = () => async dispatch => {
		const res = await axios.get('/api/current_user')
		dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async dispatch => {
	const res = await axios.post('/api/stripe', token);
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
	const res = await axios.post('/api/surveys', values);

	history.push('/surveys');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
	const res = await axios.get('/api/surveys');
	dispatch({ type: FETCH_SURVEYS, payload: res.data });
};