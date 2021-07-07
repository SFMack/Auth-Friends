import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login/Login.js';
import FriendsList from './components/FriendsList/FriendsList.js';
import AddFriend from './components/AddFriend/AddFriend.js';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.js';

import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/friends">Friends</Link></li>
        <li><Link to="/addFriend">Add Friend</Link></li>
      </ul>

      <Switch>
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <Route path="/addFriend" component={AddFriend} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
