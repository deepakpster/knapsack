// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { store, history } from './store';
import LandingPage from './containers/Login';
import '../scss/main.scss';

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route component={LandingPage} />
			</Switch>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('app'),
);
