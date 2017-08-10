import React, { Component } from 'react';
import { Card, Input, Button } from 'semantic-ui-react';

class Login extends Component {
	render(){
		return(
			<Card>
	          <Card.Content>
	            <Card.Header>
	              Login!
	            </Card.Header>
	            <Input label='Email' fluid />
	            <Input label='Password' fluid />
	            <Button content='Submit' primary fluid/>
	          </Card.Content>
	        </Card>
		);
	}
}

export default Login;