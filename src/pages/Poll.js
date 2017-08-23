import React, { Component } from 'react';
import { Card, Button, Label } from 'semantic-ui-react';
import polls from '../database/polls.json';
import Axios from 'axios';

const pollId = '5994d1cdf36d28126e468591';

class Poll extends Component {
	constructor(props) {
		super(props);
		this.state = {
			poll: {}
		};
	}

	componentWillMount() {
		Axios.get('http://localhost:3001/api/polls/' + this.props.match.params.id).then((res) => {
			console.log(res.data);
			this.setState({poll: res.data});
		}).catch((err) => {
			console.log(err);
		})
	}

	render(){

		let choicesList;

		if (this.state.poll.choices) {
			choicesList = this.state.poll.choices.map((choice, index) => {
				return (
				  <Button primary floated='left' key={index}>
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