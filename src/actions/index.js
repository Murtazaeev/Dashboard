import axios from 'axios';

export const fetchUsers = () => async (dispatch) => {
	const response = await axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data');
	dispatch({ type: 'FETCH_USERS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
	const response = await axios.get(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${id}`);

	dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const deleteUser = (id) => async (dispatch) => {
	await axios.delete(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${id}`);

	dispatch({ type: 'DELETE_USER', payload: { id: id } });
};
