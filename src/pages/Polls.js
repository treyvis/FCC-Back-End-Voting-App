import React, { Component } from 'react';
import { Segment, List } from 'semantic-ui-react';
import polls from '../database/polls.json'

class Polls extends Component {

	render() {
		console.log(polls);
		const pollsList = polls.data.map((poll, index) => {
			return (
				<List.Item key={index}>
	              <List.Content>
	                <List.Header>
	                  {poll.title}
	                </List.Header>
	                  {poll.description}
	              </List.Content>
	            </List.Item>
			);
		});
		return(
			<Segment inverted>
	          <List divided inverted relaxed>
	            {pollsList}
	          </List>
	        </Segment>
		);
	}
}

export default Polls;