import React, { Component } from 'react';
import { Segment, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Polls extends Component {
	constructor(props) {
		super(props);
		this.state = {
			polls: []
		};
	}

	componentWillMount() {
		Axios.get('/api/polls').then((res) => {
			console.log(res.data);
			this.setState({polls: res.data});
		}).catch((err) => {
			console.log(err);
		})
	}

	render() {
		const pollsList = this.state.polls.map((poll, index) => {
			return (
				<List.Item  key={index}>
					<Link to={this.props.match.url + '/' + poll._id} >
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
			<Segment inverted style={{margin: '10px'}}>
	          <List divided inverted relaxed>
	            {pollsList}
	          </List>
	        </Segment>
		);
	}
}

export default Polls;