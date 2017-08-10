import React, { Component } from 'react';
import { Card, Input, Button } from 'semantic-ui-react';

class SignUp extends Component {
	render(){
		return(
			<Card>
	          <Card.Content>
	            <Card.Header>
	              Sign Up!
	            </Card.Header>
	            <Input label='Name' fluid />
	            <Input label='Email' fluid />
	            <Input label='Password' fluid />
	            <Button content='Submit' primary fluid/>
	          </Card.Content>
	        </Card>
		);
	}
}

export default SignUp;