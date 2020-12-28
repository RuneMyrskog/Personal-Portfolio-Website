import React from 'react';

import './styles.css';
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import {MediaLink, MediaSpan} from "../Components/Media";

import profilepic from '../images/profilepic.jpeg';
import emailIcon from "../images/email-icon.png";
import locationIcon from "../images/location-icon.png";
import githubIcon from "../images/github_logo.png";
import linkedinIcon from "../images/linkedin-icon.png";

export default class Home extends React.Component {
    render (){
        return (
        <div id="homeContainer">
            <div id="leftContainer">
                <div id="profilepicNameContainer">
                    <img id="profilepic" src={profilepic} alt="profile pic"></img>
                    <Name/>
                </div>

                <div id="externalsContainer">
                    <MediaSpan icon={locationIcon} text="Maple, Ontario"/>
                    <MediaSpan icon={emailIcon} text="runemyrskog@gmail.com"/>
                    <MediaLink icon={githubIcon} text="github.com/RuneMyrskog" href="https://github.com/RuneMyrskog"/>
                    <MediaLink icon={linkedinIcon} text="linkedin" href="https://www.linkedin.com/in/rune-myrskog-21a7901a8/"/>
                </div>
            </div>
            <div id="rightContainer">
                <div id="rightContainerTopSpacer"></div>
                <AboutSection/>
                <Skills/>
                <Projects/>
                <Contact/>
            </div>
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
                <p id="aboutMeDescription">
                    My name is Rune Myrskog. I am a <strong>software developer</strong> currently 
                    in my 3rd undergraduate year as a <strong>computer science specialist</strong> at 
                    the <a href="https://www.utoronto.ca/">University of Toronto, St. George Campus</a>. 
                    I enjoy all kinds of software development, with a particular interest in <strong>Machine Learning</strong>. I ideally want 
                    to pursue a career involving the combination of <strong>health and software</strong>.
                    I welcome challenging experiences that I can learn from. I also enjoy working on my fitness,
                    binging tv shows, and playing guitar.
                </p>
            </div>
        );
    }
}