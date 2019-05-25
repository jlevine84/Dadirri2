import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component {
 
  render () {
    return (
      <nav class="navbar">
        <Link to="/">
          <img src='images/icon.png' className="littleicon"/>
        </Link>
        <span className="welcome">
          Welcome, {this.props.user}!
        </span>
        <Link to="/about" className="navbarlink">About Dadirri</Link>
        <button type="button" className="btn btn-info" onClick = {this.props.logout}>Logout</button>
      </nav>
    )
  }
};

export default Nav;
