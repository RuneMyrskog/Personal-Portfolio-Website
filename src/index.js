import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './Components/Navbar';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Skills from './Skills';


import './index.css'


class App extends React.Component {
  render(){
    return (
        <Router>
            <Navbar/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/skills" component={Skills}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
        </Router>
      );
    }
}

window.onload = () => {
  ReactDOM.render(<App />,document.getElementById('root'));
}



