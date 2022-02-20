import jsonPlaceholder from '../apis/jsonPlaceholder';
import axios from 'axios';

export const fetchUsers = () => async (dispatch) => {
	const response = await axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data');
	dispatch({ type: 'FETCH_USERS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
	const response = await axios.get(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${id}`);

	dispatch({ type: 'FETCH_USER', payload: response.data });
};
