import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Home';



import './index.css'




class App extends React.Component {
  render(){
    return (
      <>
        <Navbar />
        <Home/>
      </>
      );
    }
}

var squiggle;
window.onload = () => {
  ReactDOM.render(<App />,document.getElementById('root'));
  ReactDOM.render(<Footer />, document.getElementById('footer'));

  squiggle = document.getElementById("squiggle");
  window.onscroll = () => {
    if (window.pageYOffset > window.innerHeight) {
      squiggle.style.opacity = 0.5;
    
    } else if (window.pageYOffset < window.innerHeight) {
      squiggle.style.opacity = 1;
    
    }
  }
 
}