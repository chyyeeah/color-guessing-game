import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Game from './Game/Game.jsx';
import Home from './Home/Home.jsx';
import Logout from './Logout/Logout.jsx';
import PrivateRoute from './PrivateRoute.jsx';

export default () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(true);
  const [ username, setUsername ] = useState('');

  return (
    <Router>
      <Switch>
        <PrivateRoute
          path="/game"
          Component={Game}
          isLoggedIn={isLoggedIn}
          username={username}>
        </PrivateRoute>
        <Route path="/logout">
          <Logout
            setIsLoggedIn={setIsLoggedIn}/>
        </Route>
        <Route path="/">
          <Home
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setUsername={setUsername}/>
        </Route>
      </Switch>
    </Router>
  )
};