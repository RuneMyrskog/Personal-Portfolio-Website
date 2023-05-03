import React from 'react';
import {Link} from 'react-router-dom';
import { GithubLink, EmailLink, LinkedinLink, } from '../Media';
import './styles.css'

export default class Navbar extends React.Component {

    render () {
      return (
        <div id="navbar"> 
          {/* <div id="navLeftContainer">
            <span id="navName">R</span>
          </div> */}
          <div id="navRightContainer">

            <ul id="navLinkList">
              <NavLink to="/#projects" name="Projects"/>
              <NavLink to="/#experience" name="Experience" />
              <NavLink to="/#resume" name="Resume"/>
              <NavLink to="/#Contact" name="Contact" />
            
            
            <ul id="externalsList">
              <GithubLink />
              <EmailLink />
              <LinkedinLink />
            </ul>
            
            </ul>

          </div>
        </div>
      );
    }
  }

class NavLink extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.to}>
          <span className="navSpan">{this.props.name}</span>
        </a>
      </li>
    );
  }
}