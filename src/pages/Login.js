import React, { Component } from 'react';
import { Card, Input, Button } from 'semantic-ui-react';

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
		            onChange={(event) => {this.updateInput(event, 'email')}}/>
	            <Input label='Password' fluid
		            value={this.state.password} 
		            onChange={(event) => {this.updateInput(event, 'password')}}/>
	            <Button content='Submit' primary fluid/>
	          </Card.Content>
	        </Card>
		);
	}
}

export default Login;