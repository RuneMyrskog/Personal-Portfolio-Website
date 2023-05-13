import React from 'react';
import './styles.css'

export default class Navbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mobile: false,
      }
    }

    openCloseMobile() {
      this.setState({mobile: !this.state.mobile})
    }

    render () {

      const openCloseMobile = this.openCloseMobile.bind(this);
      return (
        <>
        <div id="navbar"> 
          <div className="navContainer">
              <a href="/"><span id="navName">Rune Myrskog</span></a>
              <ul id="navLinkList">
                <NavLink to="/#home" name="Home" />
                <NavLink to="/#about" name="About" />
                <NavLink to="/#projects" name="Projects"/>
                <NavLink to="/#contact" name="Contact"/>
              </ul>
              <i onClick={openCloseMobile} className="fa-solid fa-bars-staggered hamburger-menu"></i>
          </div>
        </div>

        <div id="mobile-navbar" className={this.state.mobile ? "mobile-showing" : "mobile-hidden"}>
            <i id="closeMobileNav" onClick={openCloseMobile} className="fa-solid fa-xmark close-mobile"></i>
          <ul>
              <NavLink onClick={openCloseMobile} to="/#home" name="Home" />
              <NavLink onClick={openCloseMobile} to="/#about" name="About" />
              <NavLink onClick={openCloseMobile} to="/#projects" name="Projects" />
              <NavLink onClick={openCloseMobile} to="/#contact" name="Contact" />
          </ul>
        </div>
        </>
      );
    }
  }

class NavLink extends React.Component {
  render() {
    return (
      <li {...this.props}>
        <a href={this.props.to}>
          <span className="navSpan">{this.props.name}</span>
        </a>
      </li>
    );
  }
}