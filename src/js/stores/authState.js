// @flow
import moment from 'moment';

const initialState = {
	authStatus: 0,
	user: null,
};

export default(state = initialState, action) => {
	switch (action.type) {
		case 'AUTH_SUCCESS':
			return { ...state, authStatus: 1, user: action.user };
		case 'AUTH_FAILURE':
			return { ...state, authStatus: -1 };
		default:
			return state;
	}
};
