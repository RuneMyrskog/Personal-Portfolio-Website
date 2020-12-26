import React from 'react';
import profilepic from '../images/profilepic.jpeg';
import './styles.css';

export default class Home extends React.Component {
    render (){
        return (
        <div id="homeContainer">
            <img id="profilepic" src={profilepic} alt="profile pic"></img>
            <Name/>
            <AboutSection/>
            
        </div>
        );
    }
}


class Name extends React.Component {
    render() {
        return (
        <div id="nameContainer">
            <span id="name">Rune Myrskog</span>
        </div>
        );
    }
}
  
class AboutSection extends React.Component {

    render (){
        return (
            <div className="sectionContainer">
                <span className="title">About Me</span>
                <p className="description">
                    My name is Rune Myrskog. I am a <strong>software developer</strong> currently 
                    in My 3rd undergraduate year as a <strong>computer science specialist</strong> at 
                    the <a href="https://www.utoronto.ca/">University of Toronto, St. George Campus</a>. 
                    I enjoy all kinds of software development, with a particular interest in <strong>Machine Learning</strong>, 
                    I welcome challenging experiences that I can learn from. <br/><br/> I also enjoy working on my fitness,
                    binging tv shows, and playing guitar.
                </p>
            </div>
        );
    }
}