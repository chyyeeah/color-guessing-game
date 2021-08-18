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

const myStorage = window.localStorage;

const getUsername = () => {
  if (myStorage.username) return myStorage.username;
  return '';
};

export default () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!myStorage.isLoggedIn);
  const [username, setUsername] = useState(getUsername());
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [sfDateTime, setSfDateTime] = useState(0);
  const [nyDateTime, setNyDateTime] = useState(0);

  return (
    <Router>
      <Switch>
        <PrivateRoute
          path="/game"
          Component={Game}
          isLoggedIn={isLoggedIn}
          username={username}
          wins={wins}
          setWins={setWins}
          losses={losses}
          setLosses={setLosses}
          sfDateTime={sfDateTime}
          setSfDateTime={setSfDateTime}
          nyDateTime={nyDateTime}
          setNyDateTime={setNyDateTime} >
        </PrivateRoute>
        <Route path="/logout">
          <Logout
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/">
          <Home
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setUsername={setUsername}
            setWins={setWins}
            setLosses={setLosses}
            setSfDateTime={setSfDateTime}
            setNyDateTime={setNyDateTime} />
        </Route>
      </Switch>
    </Router>
  )
};