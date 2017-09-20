import React, { Component } from 'react';
import { Card, Input, Button } from 'semantic-ui-react';
import Axios from 'axios';

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};

		this.updateInput = this.updateInput.bind(this);
		this.login = this.login.bind(this);
	}

	updateInput(event, input){
		let state = this.state;
		state[input] = event.target.value;
		this.setState(state);
	}

	login() {
		let state = this.state;
		console.log(state);
		Axios.post('http://localhost:3001/api/login', state).then(res => {
			console.log(res);
		});
	}

	render(){
		return(
			<Card>
	          <Card.Content>
	            <Card.Header>
	              Login!
	            </Card.Header>
	            <Input label='Email' fluid
		            value={this.state.email} 
		            onChange={(event) => {this.updateInput(event, 'email')}} />
	            <Input label='Password' fluid type='password'
		            value={this.state.password} 
		            onChange={(event) => {this.updateInput(event, 'password')}} />
	            <Button content='Submit' primary fluid
	            	onClick={this.login} />
	          </Card.Content>
	        </Card>
		);
	}
}

export default Login;