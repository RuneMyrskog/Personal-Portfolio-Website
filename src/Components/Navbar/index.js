import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.jpeg';
import './styles.css'

export default class Navbar extends React.Component {

    render () {
      return (
        <div id='navbar'>
          <img id="logo" src={logo} alt="logo"></img>
          <ul>
            <NavLink to="/" name="Home"/>
            <NavLink to="/about" name="About"/>
            <NavLink to="/skills" name="Skills"/>
            <NavLink to="/contact" name="Contact Me"/>
          </ul>
        </div>
      );
    }
  }
  
  class NavLink extends React.Component {
    render() {
      return (
        <li>
          <Link to={this.props.to}>
            <button id="navButton">{this.props.name}</button>
          </Link>
        </li>
      );
    }
  }