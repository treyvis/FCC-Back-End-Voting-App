import React, { Component } from 'react';
import { Segment, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import polls from '../database/polls.json'

class Polls extends Component {

	render() {
		const pollsList = polls.data.map((poll, index) => {
			return (
				<List.Item >
					<Link to={this.props.match.url + '/' + index} key={index} >
		              <List.Content>
		                <List.Header>
		                  {poll.title}
		                </List.Header>
		                  {poll.description}
		              </List.Content>
		            </Link>
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