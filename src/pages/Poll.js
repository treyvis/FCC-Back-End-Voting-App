import React, { Component } from 'react';
import { Card, Button, Label } from 'semantic-ui-react';
import polls from '../database/polls.json';

class Poll extends Component {
	render(){

		const pollId = this.props.match.params.id;

		const choicesList = polls.data[pollId].choices.map((choice, index) => {
			return (
			  <Button primary floated='left' key={index}>
                <Label horizontal>
                  {choice.count}
                </Label>
                {choice.name}
              </Button>
			);
		});

		return(
			<Card>
	          <Card.Content>
	            <Card.Header>
	              {polls.data[pollId].title}
	            </Card.Header>
	            <Card.Description>
	              {polls.data[pollId].description}
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