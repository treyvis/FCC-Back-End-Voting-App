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
				{name: ''},
				{name: ''},
				{name: ''}
			]
		};

		this.nameUpdate = this.nameUpdate.bind(this);
		this.descriptionUpdate = this.descriptionUpdate.bind(this);
		this.choiceUpdate = this.choiceUpdate.bind(this);
		this.addChoice = this.addChoice.bind(this);
		this.removeChoice = this.removeChoice.bind(this);
	}

	nameUpdate(event){
		this.setState({name: event.target.value});
	}

	descriptionUpdate(event){
		this.setState({description: event.target.value});
	}

	choiceUpdate(event, index){
		let choices = this.state.choices;
		choices[index].name = event.target.value;
		this.setState({choices});
	}

	addChoice(){
		let choices = this.state.choices;
		choices.push({name: ''});
		this.setState(choices);
	}

	removeChoice(index){
		let choices = this.state.choices;
		choices.splice(index, 1);
		this.setState(choices);
	}

	render(){

		let additionalChoices = [];
		for (let i = 2; i < this.state.choices.length; i++) {
			additionalChoices.push(
				<Input label={'Choice ' + (i + 1)} key={i}
					value={this.state.choices[i].name} onChange={(event) => {this.choiceUpdate(event, i)}}
					fluid icon={{name: 'remove circle', link: true, onClick: () => {this.removeChoice(i)}}}/>
			);
		}

		return(
			<Card>
				<Input label='Name' value={this.state.name} onChange={this.nameUpdate} fluid />
				<Input label='Description' value={this.state.description} onChange={this.descriptionUpdate} fluid />
				<Input label='Choice 1' value={this.state.choices[0].name} onChange={(event) => {this.choiceUpdate(event,0)}} fluid />
				<Input label='Choice 2' value={this.state.choices[1].name} onChange={(event) => {this.choiceUpdate(event,1)}}fluid />
				{additionalChoices}
				<Button icon='add circle' onClick={this.addChoice} />
			</Card>
		);
	}
}

export default NewPoll;