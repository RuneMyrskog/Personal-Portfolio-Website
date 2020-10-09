import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ContactMe from './ContactMe';
import Home from './Home'
import About from './About';
import Skills from './Skills';
import logo from './images/logo.jpeg';
import './css/App.css';


export default function App() {
  return (
      <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/contactme" component={ContactMe}/>
          </Switch>
      </Router>
  );
}


class Navbar extends React.Component {

  render () {
    return (
      <div id='navbar'>
        <img id="logo" src={logo} alt="logo"></img>
        <ul>
          <NavLink to="/" name="Home"/>
          <NavLink to="/about" name="About"/>
          <NavLink to="/skills" name="Skills"/>
          <NavLink to="/contactme" name="Contact Me"/>
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



