// @flow
import { push } from 'react-router-redux';

export function onSignIn(email, password) {
	return (dispatch, getState) => {
		dispatch({ type: 'AUTH_SUCCESS', user: { uuid: '12234' } });
		dispatch(push('/dashboard'));
		localStorage.setItem('KSGUID', '');
	};
}
