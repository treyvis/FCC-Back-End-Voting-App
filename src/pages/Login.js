import React, { Component } from 'react';
import { Card, Input, Button } from 'semantic-ui-react';
import Axios from 'axios';
import firebase from 'firebase';

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
		firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then( res => {
			console.log("Signed in:", res.uid);
			window.location = "/polls";
		}).catch(error => {
			console.log(error);
		});
	}

	componentWillMount() {

		firebase.auth().onAuthStateChanged((user) => {
		  if (user) {
		    console.log('user signed in');
		  } else {
		    console.log('user not signed in');
		  }
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