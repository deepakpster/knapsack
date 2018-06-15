// @flow

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authActions } from './../../actions';
import LoginComponent from '../../components/Login';

class Login extends React.Component {
	render() {
		return (
			<LoginComponent {...this.props} />
		);
	}
}

export default withRouter(connect(
	(state, props) => ({
		authState: state.authState,
		...props,
	}),
	(dispatch => ({
		actions: bindActionCreators(authActions, dispatch),
	})),
)(Login));
