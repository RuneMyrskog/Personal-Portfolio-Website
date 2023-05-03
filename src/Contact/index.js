import React from 'react';


import './styles.css';

export default class Contact extends React.Component {
    render() {
      return (
        <div>
          <div className="sectionContainer">
            <span className="title">Contact Me</span>
            <p className="description">
              Thank you for taking the time to contact me, I can be reached by
              my email at <a href="mailto:runemyrskog@gmail.com" id="emailLink">RuneMyrskog@gmail.com</a>
            </p>
          </div>
        </div>
      );
    }

    
  }