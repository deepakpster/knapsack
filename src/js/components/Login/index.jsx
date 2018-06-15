import React from 'react';
import styles from './styles.scss';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
	}
	onEmailChange(eOpts) {
		this.setState({ email: eOpts.target.value });
	}
	onPasswordChange(eOpts) {
		this.setState({ password: eOpts.target.value });
	}
	render() {
		const { email, password } = this.state;
		return (
			<div className={`${styles.loginContainer}`}>
				<div className={`${styles.loginForm}`}>
					<h1 className="title">Knapsack</h1>
					<input type="text" className="input" placeholder="Email" value={email} onChange={this.onEmailChange} />
					<input type="password" className="input" placeholder="Password" value={password} onChange={this.onPasswordChange} />
					<div className={`${styles.loginFooter}`}>
						<a
							className="button is-link"
							onClick={() => {
								this.props.actions.onSignIn(email, password);
							}}
						>Sign In
						</a>
						<a className="button is-text">Sign Up</a>
					</div>
				</div>
			</div>
		);
	}
}
