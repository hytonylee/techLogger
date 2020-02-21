import {
	SET_LOADING,
	GET_TECHS,
	ADD_TECH,
	DELETE_TECH,
	TECHS_ERROR
} from './types';

// get techs from server
export const getTechs = () => async dispatch => {
	try {
		setLoading();
		const res = await fetch('/techs');
		const data = await res.json();
		dispatch({
			type: GET_TECHS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
			payload: err.response.data
		});
	}
};

// add a tech to server
export const addTech = tech => async dispatch => {
	try {
		setLoading();
		const res = await fetch('/techs', {
			method: 'post',
			body: JSON.stringify(tech),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const data = await res.json();

		dispatch({
			type: ADD_TECH,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
			payload: err.response.data
		});
	}
};

// delete a tech from server
// delete log from server
export const deleteTech = id => async dispatch => {
	try {
		setLoading();
		await fetch(`/techs/${id}`, {
			method: 'delete'
		});

		dispatch({
			type: DELETE_TECH,
			payload: id
		});
	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
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
