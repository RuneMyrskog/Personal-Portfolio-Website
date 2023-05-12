import React from 'react';
import './styles.css';
import SectionTitle from '../Components/SectionTitle';


export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: null,
      name: null,
      email: null,
      message: null,
      infoSpan: null,
      status: "hidden",
    }
  }

  

  sendSMS(name, email, message) {
    var data = {
      name: name,
      email: email,
      message: message
    }

    this.setState({ status: "loading" })

    fetch(`https://us-central1-personal-portfolio-24a80.cloudfunctions.net/sendSMSv2`, {
      method: "post",
      headers: {
        'Access-Control-Allow-Origin': "*",
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("ASPIJDOF");
      console.log(res.status);
      if (res.status === 200) {
        console.log("ASPIJDOF");
        this.setState({status: "success"});
      } 
      else 
      {
        this.setState({ status: "error" });
      }
    });
    

  }

  infoSpan(){
    var statusMessage;
    switch (this.state.status){
      case "loading":
        statusMessage = "Sending . . .";
        break;
      case "hidden":
        statusMessage = "";
        break;
      case "success":
        statusMessage = "Message Sent!"
        break;
      case "error":
        statusMessage = "Sorry, an error occured. Please use my email instead."
      break;
      default:
        statusMessage = "hidden"
    }

    return (
      <span id="form-info-span" className={this.state.status}>{statusMessage}</span>
    );
  }

  handleSubmit(e){
    e.preventDefault();

    const { name, email, message, form } = this.state;
    if (name == null || email == null || message == null){
      console.log("error");
      return false;
    }
    name.className = "default-border";
    email.className = "default-border";
    message.className = "default-border";

    if (name.value === ""){
      name.className = "error-border"
      return false;
    }
    if (email.value === "") {
      email.className = "error-border"
      return false;
    }

    if (message.value === "") {
      message.className = "error-border"
      return false;
    }

    //TODO
    try {
      this.sendSMS(name.value, email.value, message.value);
    }
    catch (err){
      console.log(err);
      this.setState({status: "error"})
    }

    if (form != null){
      form.reset();
    }

    return false; //prevent refresh
  }

  componentDidMount(){
    this.setState({
      form : document.getElementById("contactForm"),
      name : document.getElementById("name"),
      email : document.getElementById("email"),
      message : document.getElementById("message"),
      infoSpan: document.getElementById("form-info-span")
    })
  }

  reset(element) {
    if (element != null){
      element.className = "default-border"
    }
    this.setState({status: "hidden"})
  }

  render() {
    return (
      <div id="contact" className="section">
        <div id="contactContainer" className="sectionContainer">
          <SectionTitle title="Contact"/>
          <div className="container-horizontal-spaced">
            <form id="contactForm" onSubmit={this.handleSubmit}>

              <label htmlFor="name" >Name</label>
              <input onClick={() => { this.reset(this.state.name);}} type="text" id="name" className="default-border" name="name"/>
              
              <label htmlFor="email">Email</label>
              <input onClick={() => { this.reset(this.state.email); }} type="text" id="email" className="default-border"  name="email"/>

              <label htmlFor="message">Message</label>
              <textarea onClick={() => { this.reset(this.state.message);}} id="message" className="default-border" name="message" rows="6">
              </textarea>
              <div id="submit-info-span-container">
                <input onClick={this.handleSubmit.bind(this)} id="submitButton" className="button" type="submit" value="Send Message"/>
                {this.infoSpan()}
              </div>
            </form>
            <div id="contactRightContainer">
                <div id="contactMessageContainer">
                  <span id="contactMessage">Feel free to reach out! You can contact me through the form or directly <a href="mailto:runemyrskog@gmail.com">email me</a></span>
                </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}