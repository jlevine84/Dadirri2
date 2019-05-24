import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component {
 
  render () {
    return (
      <nav class="navbar">
      <Link to="/"> <img src='images/icon.png' className="littleicon"></img></Link>
        <h5>Welcome, {this.props.user}!</h5>
        <Link to="/about" className = "navbarlink">About Dadirri</Link>
        <Link to="/dashboard" className="navbarlink">Dashboard</Link>
        <button type="button" className="btn btn-info" onClick = {this.props.logout}>Logout</button>
        
      </nav>
    )
  }
};

export default Nav;
