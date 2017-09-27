import React, { Component } from 'react';
import { Segment, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import firebase from 'firebase';

class MyPolls extends Component {
	constructor(props) {
		super(props);
		this.state = {
			polls: []
		};
	}

	componentWillMount() {
		firebase.auth().onAuthStateChanged((user) => {
		  if (user) {
		  	console.log(user.uid);
		  	const uid = {"uid": user.uid};
		  	console.log(uid);
		    Axios.post('http://localhost:3001/api/mypolls', uid).then((res) => {
				console.log(res.data);
				this.setState({polls: res.data});
			}).catch((err) => {
				console.log(err);
			});
		  } else {
		  	window.location = '/login';
		  }
		});
		
	}

	render() {
		const pollsList = this.state.polls.map((poll, index) => {
			return (
				<List.Item  key={index}>
					<Link to={'/polls/' + poll._id} >
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

export default MyPolls;