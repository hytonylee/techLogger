import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from './types';

// export const getLogs = () => {
// 	// thunk middleware allows returning fn that take in dispatch
// 	return async dispatch => {
// 		setLoading();

// 		const res = await fetch('/logs');
// 		const data = await res.json();

// 		dispatch({
// 			type: GET_LOGS,
// 			payload: data
// 		});
//   };

// get logs from server
export const getLogs = () => async dispatch => {
	try {
		setLoading();
		const res = await fetch('/logs');
		const data = await res.json();
		dispatch({
			type: GET_LOGS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data
		});
	}
};

// add log to server
export const addLog = log => async dispatch => {
	try {
		setLoading();
		const res = await fetch('/logs', {
			method: 'post',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const data = await res.json();

		dispatch({
			type: ADD_LOG,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data
		});
	}
};

// set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
