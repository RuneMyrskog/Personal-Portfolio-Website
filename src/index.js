import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { GithubLink, EmailLink, LinkedinLink, } from './Components/Media';
import Navbar from './Components/Navbar';
import Home from './Home';



import './index.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';




class App extends React.Component {
  render(){
    return (
      <>
        <Navbar />
        <Home/>
        <footer>
          <div className="footer-container">
              <h3>Copyright © 2023. All rights are reserved</h3>
              <div class="footer-socials-container">
                <GithubLink/>
                <LinkedinLink/>
              </div>
            </div>
        </footer>
      </>
      );
    }
}

var home, squiggle;
window.onload = () => {
  ReactDOM.render(<App />,document.getElementById('root'));
  squiggle = document.getElementById("squiggle");
  home = document.getElementById("homeContainer");
  home.onscroll = () => {

    if (home.scrollTop > window.innerHeight) {
      squiggle.style.opacity = 0.5;
    
    } else if (home.scrollTop < window.innerHeight) {
      squiggle.style.opacity = 1;
    
    }
  }
 
}