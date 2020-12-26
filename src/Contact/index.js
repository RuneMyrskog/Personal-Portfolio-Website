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
              my email at <strong>RuneMyrskog@gmail.com</strong>
            </p>
          </div>
        </div>
      );
    }

    
  }

  class ContactForm extends React.Component {
    render () {
      return (
        <div id="contactFormContainer">
        <form id="contactForm">
          <label id="nameLabel">Name: </label>
          <textarea id="nameInput" type="text"></textarea><br/><br/>

          <label id="emailLabel">Email: </label>
          <textarea id="emailInput" type="text"></textarea><br/><br/>

          <label id="messageLabel">Message: </label>
          <textarea id="messageInput" type="text"></textarea><br/><br/>
          <button id="contactFormSubmitButton" onClick={this.handleSubmission}>Submit</button>
        </form>
      </div>
      );
    }

    handleSubmission = (e)=>{
      e.preventDefault();
      var form = document.getElementById("contactForm");
      var name = document.getElementById("nameInput").value;
      var email = document.getElementById("emailInput").value;
      var message = document.getElementById("messageInput").value;
      console.log(name, email, message);
    }
  }