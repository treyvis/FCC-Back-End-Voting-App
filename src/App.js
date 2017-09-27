import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Polls from './pages/Polls.js';
import Poll from './pages/Poll.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import NewPoll from './pages/NewPoll.js';
import MyPolls from './pages/MyPolls.js';
import firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: '',
      email: ''
    };

    this.logout = this.logout.bind(this);

  }

  componentWillMount(){
    const config = {
      apiKey: "AIzaSyCqeWDzpsIExJGteP5FFme0CHPCuNdDgYQ",
      authDomain: "fcc-voting-app-23c6b.firebaseapp.com",
      databaseURL: "https://fcc-voting-app-23c6b.firebaseio.com",
      projectId: "fcc-voting-app-23c6b",
      storageBucket: "fcc-voting-app-23c6b.appspot.com",
      messagingSenderId: "308435312312"
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        this.setState({
          uid: user.uid,
          email: user.email
        });
      }
    });
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.setState({
        uid: '',
        email: ''
      });
    });
  }

  render() {

    const logginLogout = (() => {
      if (this.state.email) {
        return (<Link  onClick={this.logout} to='#'><Menu.Item name='Logout' /></Link> );
      } else {
        return (<Link to='/login'><Menu.Item name='Login' /></Link> );
      }
    })();

    const emailSignUp = (() => {
      if (this.state.email) {
        return (<Link to='/mypolls'><Menu.Item>My Polls</Menu.Item></Link>);
      } else {
        return(<Link to='/signup'><Menu.Item name='Sign Up' /></Link>);
      }
    })();

    return (
      <BrowserRouter>
        <div className="App">
          <Menu inverted>
            <Link to='/polls'><Menu.Item active name='Polls' /></Link>
            <Link to='/newpoll'><Menu.Item name='New Poll' /></Link>
            {logginLogout}
            {emailSignUp}
          </Menu>
          <Switch>
            <Route exact path='/polls' component={Polls} />
            <Route path='/polls/:id' component={Poll} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/newpoll' component={NewPoll} />
            <Route path='/mypolls' component={MyPolls} />
            <Route exact path='/'>
              <Redirect to='/polls' />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
