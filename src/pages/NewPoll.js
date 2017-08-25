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
		this.descriptionUpdate = this.descriptionUpdate.bind(this);
		this.choiceUpdate = this.choiceUpdate.bind(this);
		this.addChoice = this.addChoice.bind(this);
		this.removeChoice = this.removeChoice.bind(this);
		this.inputIsEmpty = this.inputIsEmpty.bind(this);
		this.validPoll = this.validPoll.bind(this);
		this.createNewPoll = this.createNewPoll.bind(this);
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

	inputIsEmpty(input){
		if (input === '') {
			return true;
		} else {
			return false;
		}
	}

	validPoll(){
		if (this.state.name !== '' &&
			this.state.description !== '' &&
			this.state.choices[0].name !== '' &&
			this.state.choices[1].name !== '' ) {
			return true;
		}
		return false;
	}

	createNewPoll(){
		if (this.validPoll){
			const newPoll = {
				title: this.state.name,
				description: this.state.description,
				choices: this.state.choices.filter((choice) => {
					return choice.name !== '';
				})
			};
			console.log(newPoll);
		}
	}

	render(){

		const saveColor = (
			() =>{
				if (this.validPoll()){
					return 'blue';
				}
				return 'red'
			}
		)();

		let additionalChoices = [];
		for (let i = 2; i < this.state.choices.length; i++) {
			additionalChoices.push(
				<Input label={'Choice ' + (i + 1)} key={i}
					value={this.state.choices[i].name} 
					onChange={(event) => {this.choiceUpdate(event, i)}}
					icon={{name: 'remove circle', link: true, onClick: () => {this.removeChoice(i)}}}
					error={(this.inputIsEmpty(this.state.choices[i].name))}
					fluid/>
			);
		}

		return(
			<Card>
				<Input label='Name' 
					value={this.state.name} 
					onChange={this.nameUpdate} 
					error={(this.inputIsEmpty(this.state.name))} 
					fluid />
				<Input label='Description' 
					value={this.state.description} 
					onChange={this.descriptionUpdate}
					error={(this.inputIsEmpty(this.state.description))} 
					fluid />
				<Input 
					label='Choice 1' 
					value={this.state.choices[0].name} 
					onChange={(event) => {this.choiceUpdate(event,0)}} 
					error={(this.inputIsEmpty(this.state.choices[0].name))}
					fluid />
				<Input label='Choice 2' 
					value={this.state.choices[1].name} 
					onChange={(event) => {this.choiceUpdate(event,1)}} 
					error={(this.inputIsEmpty(this.state.choices[1].name))}
					fluid />
				{additionalChoices}
				<Button icon='add circle' onClick={this.addChoice} />
				<Button color={saveColor} onClick={this.createNewPoll}> Save </Button>
			</Card>
		);
	}
}

export default NewPoll;