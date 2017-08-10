import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Card, Input, Button } from 'semantic-ui-react';
import Polls from './pages/Polls.js';
import Poll from './pages/Poll.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu inverted>
          <Menu.Item name='Polls' active='true'/>
          <Menu.Item name='New Poll' />
          <Menu.Item name='Login' />
          <Menu.Item name='Sign Up' />
        </Menu>
        <Polls />
        <Poll />
        <Card>
          <Card.Content>
            <Card.Header>
              Sign Up!
            </Card.Header>
            <Input label='Name' fluid />
            <Input label='Email' fluid />
            <Input label='Password' fluid />
            <Button content='Submit' primary fluid/>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;
