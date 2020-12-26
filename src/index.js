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
        <Router>
            <Navbar/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/resume" component={Resume}/>
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



