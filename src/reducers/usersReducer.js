const reducer = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_USERS':
			return action.payload;
		case 'DELETE_USER':
			return state.filter((user) => user.id !== action.payload.id);
		default:
			return state;
	}
};

export default reducer;
