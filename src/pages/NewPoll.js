import React, { Component } from 'react';
import { Card, Input, Button } from 'semantic-ui-react';

class NewPoll extends Component {
	render(){
		return(
			<Card>
				<Input label='Name' fluid />
				<Input label='Description' fluid />
				<Input label='Choice 1' fluid />
				<Input label='Choice 2' fluid />
				<Input label='Choice 3' fluid icon={{name: 'remove circle', link: true}}/>
				<Button icon='add circle' />
			</Card>
		);
	}
}

export default NewPoll;