import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter} from 'react-router-dom';
import Polls from './pages/Polls.js';
import Poll from './pages/Poll.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu inverted>
            <Menu.Item name='Polls' active='true'/>
            <Menu.Item name='New Poll' />
            <Menu.Item name='Login' />
            <Menu.Item name='Sign Up' />
          </Menu>
          <Polls />
          <Poll />
          <Login />
          <SignUp />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
