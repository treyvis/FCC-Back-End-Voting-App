import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Polls from './pages/Polls.js';
import Poll from './pages/Poll.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import NewPoll from './pages/NewPoll.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu inverted>
            <Link to='/polls'><Menu.Item active name='Polls' /></Link>
            <Menu.Item name='New Poll' />
            <Link to='/login'><Menu.Item name='Login' /></Link>
            <Link to='/signup'><Menu.Item name='Sign Up' /></Link>
          </Menu>
          <Switch>
            <Route exact path='/' component={NewPoll} />
            <Route exact path='/polls' component={Polls} />
            <Route path='/polls/:id' component={Poll} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
