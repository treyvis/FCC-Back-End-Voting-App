import React, { Component } from 'react';
import { Card, Input, Button } from 'semantic-ui-react';
import axios from 'axios';
import firebase from 'firebase';

class SignUp extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			name: ''
		};

		this.updateInput = this.updateInput.bind(this);
		this.signUp = this.signUp.bind(this);
	}

	updateInput(event, input){
		let state = this.state;
		state[input] = event.target.value;
		this.setState(state);
	}

	signUp(){
		console.log('signUp called');
		firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
			console.log('User created');
			console.log(user.uid);
			const newUser = {
				name: this.state.name,
				email: this.state.email,
				_id: user.uid
			};
			axios.post('http://localhost:3001/api/newUser', newUser).then(res => {
				console.log(newUser);
				console.log(res);
			}).catch(error => {
				console.log(error.code, error.message);
			});
		}).catch(function(error) {
		  console.log(error.code, error.message);
		});
	}

	render(){
		return(
			<Card>
	          <Card.Content>
	            <Card.Header>
	              Sign Up!
	            </Card.Header>
	            <Input label='Name' fluid 
	            	value={this.state.name} 
	            	onChange={(event) => {this.updateInput(event, 'name')}} />
	            <Input label='Email' fluid 
	            	value={this.state.email} 
	            	onChange={(event) => {this.updateInput(event, 'email')}} />
	            <Input label='Password' fluid type='password'
	            	value={this.state.password} 
	            	onChange={(event) => {this.updateInput(event, 'password')}} />
	            <Button content='Submit' primary fluid
	            	onClick={this.signUp} />
	          </Card.Content>
	        </Card>
		);
	}
}

export default SignUp;