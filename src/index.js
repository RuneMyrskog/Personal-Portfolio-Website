import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './Components/Navbar';
import Contact from './Contact';
import Home from './Home';
import Resume from './Resume';
import Skills from './Skills';


import './index.css'




class App extends React.Component {
  render(){
    return (
      <>
        <Navbar />
        <Router>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/resume" component={Resume}/>
              <Route path="/skills" component={Skills}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
        </Router>
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