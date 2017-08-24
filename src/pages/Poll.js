import React, { Component } from 'react';
import { Card, Button, Label } from 'semantic-ui-react';
import Axios from 'axios';

class Poll extends Component {
	constructor(props) {
		super(props);
		this.state = {
			poll: {}
		};

		this.voteClick = this.voteClick.bind(this);
	}

	componentWillMount() {
		Axios.get('http://localhost:3001/api/polls/' + this.props.match.params.id).then((res) => {
			console.log(res.data);
			this.setState({poll: res.data});
		}).catch((err) => {
			console.log(err);
		})
	}

	voteClick(id, choiceIndex) {
		let poll = this.state.poll;
		poll.choices[choiceIndex].count++;
		const request = {
			id: id,
			update: {
				choices: poll.choices
			}
		};
		Axios.post('http://localhost:3001/api/polls', request).then((res) => {
			if (res.status === 200) {
				this.setState({poll});
			}
		});
	}

	render(){

		let choicesList;

		if (this.state.poll.choices) {
			choicesList = this.state.poll.choices.map((choice, index) => {
				return (
				  <Button primary floated='left' key={index} onClick={() => {this.voteClick(this.state.poll._id, index)}}>
	                <Label horizontal>
	                  {choice.count}
	                </Label>
	                {choice.name}
	              </Button>
				);
			});
		}

		return(
			<Card>
	          <Card.Content>
	            <Card.Header>
	              {this.state.poll.title}
	            </Card.Header>
	            <Card.Description>
	              {this.state.poll.description}
	            </Card.Description>
	            <Card.Content extra >
	            	<Button.Group vertical fluid>
		              {choicesList}
		            </Button.Group>
	            </Card.Content>
	          </Card.Content>
	        </Card>
		);
	}
}

export default Poll;