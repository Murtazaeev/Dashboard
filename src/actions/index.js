import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchUsers = () => async (dispatch) => {
	const response = await jsonPlaceholder.get('/karolkproexe/jsonplaceholderdb/data');
	dispatch({ type: 'FETCH_USERS', payload: response });
};
