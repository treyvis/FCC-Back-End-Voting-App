import React, { Component } from 'react';
import { Card, Button, Label, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { VictoryPie } from 'victory';
import firebase from 'firebase';


class Poll extends Component {
	constructor(props) {
		super(props);
		this.state = {
			poll: {},
			uid: ''
		};

		this.voteClick = this.voteClick.bind(this);
	}

	componentWillMount() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({uid: user.uid});
			}
		});

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
		let choicesData;

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
			choicesData = this.state.poll.choices.map( choice => {
				return {
					x: choice.count,
					y: choice.count
				};
			});
		}

		const edit = (() => {
			if (this.state.uid) {
				return (
					<Link to={'/editpoll/' + this.props.match.params.id}>
						<Icon name='edit' link style={{float: 'right'}}/>
					</Link>
				);
			} else {
				return;
			}
		})();

		return(
			<Card style={{margin: '0 auto'}}>
	          <Card.Content>
	            <Card.Header>
	              {this.state.poll.title}
	              {edit}
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
	          <VictoryPie 
	          	data={choicesData}
	          	innerRadius={100}
	          	padAngle={4}
	          />
	        </Card>
		);
	}
}

export default Poll;