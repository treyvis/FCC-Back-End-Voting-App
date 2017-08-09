import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Segment, List } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu inverted>
          <Menu.Item name='Polls' active='true'/>
          <Menu.Item name='New Poll' />
          <Menu.Item name='Login' />
        </Menu>
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
      </div>
    );
  }
}

export default App;
