import React from 'react';
import {Link} from 'react-router-dom';
import profilepic from '../../images/profilepic.jpeg';
import githubLogo from '../../images/github_logo.png';
// import linkedInLogo from '../../images/linkedin_logo.jpg';
import './styles.css'

export default class Navbar extends React.Component {

    render () {
      return (
        <div id="navbar"> 
          <div id="navLeftContainer">
            <img id="navPic" src={profilepic} alt="profile"/>
            <span id="navName">Rune Myrskog</span>
          </div>

          <div id="navRightContainer">
            <ul>
              <NavLink to="/" name="About Me"/>
              {/* <NavLink to="/skills" name="Skills"/> */}
              <NavLink to="/resume" name="Resume"/>
              {/* <NavLink to="/contact" name="Contact Me"/> */}
            </ul>
            
              <a href="https://github.com/RuneMyrskog">
                <img className="navLogo" src={githubLogo} alt="github"/>
              </a>
              {/* <a href="https://www.linkedin.com/in/rune-myrskog-21a7901a8/">
                <img className="navLogo" src={linkedInLogo} alt="linkdin"/>
              </a> */}
            </div>
            <div id="spacer"></div>
        </div>
      );
    }
  }
  
  class NavLink extends React.Component {
    render() {
      return (
        <li>
          <Link to={this.props.to}>
            <span className="navSpan">{this.props.name}</span>
          </Link>
        </li>
      );
    }
  }