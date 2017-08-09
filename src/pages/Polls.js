import React, { Component } from 'react';
import { Segment, List } from 'semantic-ui-react';

class Polls extends Component {
	render() {
		return(
			<Segment inverted>
	          <List divided inverted relaxed>
	            <List.Item>
	              <List.Content>
	                <List.Header>
	                  Best Lord of the Rings Movie
	                </List.Header>
	                Choose which films rules them all.
	              </List.Content>
	            </List.Item>
	            <List.Item>
	              <List.Content>
	                <List.Header>
	                  Favorite cuisine
	                </List.Header>
	                What do you eat the most?
	              </List.Content>
	            </List.Item>
	            <List.Item>
	              <List.Content>
	                <List.Header>
	                  Favorite Color
	                </List.Header>
	                What can you tell about someone from a color?
	              </List.Content>
	            </List.Item>
	          </List>
	        </Segment>
		);
	}
}

export default Polls;