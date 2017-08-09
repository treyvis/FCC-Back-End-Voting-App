import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Card, Button, Label } from 'semantic-ui-react';
import Polls from './pages/Polls.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu inverted>
          <Menu.Item name='Polls' active='true'/>
          <Menu.Item name='New Poll' />
          <Menu.Item name='Login' />
        </Menu>
        <Polls />
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
      </div>
    );
  }
}

export default App;
