import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react';
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
        </Menu>
        <Polls />
        <Poll />
      </div>
    );
  }
}

export default App;
