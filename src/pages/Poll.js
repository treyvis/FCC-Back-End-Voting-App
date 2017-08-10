import React, { Component } from 'react';
import { Card, Button, Label } from 'semantic-ui-react';

class Poll extends Component {
	render(){
		return(
			<Card>
	          <Card.Content>
	            <Card.Header>
	              Best Lord of the Rings Movie
	            </Card.Header>
	            <Card.Description>
	              Choose which film rules them all.
	            </Card.Description>
	            <Card.Content extra fluid>
	              <Button fluid primary floated='left'>
	                <Label horizontal>
	                  203
	                </Label>
	                The Fellowship of the Ring
	              </Button>
	              <Button fluid primary floated='left'>
	                <Label horizontal>
	                  187
	                </Label>
	                The Two Towers
	              </Button>
	              <Button fluid primary>
	                <Label horizontal>
	                  471
	                </Label>
	                The Return of the King
	              </Button>
	            </Card.Content>
	          </Card.Content>
	        </Card>
		);
	}
}

export default Poll;