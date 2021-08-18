import React from 'react';
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="nav-bar">
      <div className="spacer"></div>
      <button className="logout">
        <Link to='/logout'>Logout</Link>
      </button>
    </div>
  )
};