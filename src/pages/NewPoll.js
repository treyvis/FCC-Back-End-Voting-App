import React, { Component } from 'react';
import { Card, Input, Button } from 'semantic-ui-react';

class NewPoll extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			description: '',
			choices: [
				{name: ''},
				{name: ''},
				{name: ''}
			]
		};

		this.nameUpdate = this.nameUpdate.bind(this);
	}

	nameUpdate(e){
		this.setState({name: e.target.value});
	}
	render(){
		return(
			<Card>
				<Input label='Name' value={this.state.name} onChange={this.nameUpdate} fluid />
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