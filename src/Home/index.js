import React from 'react';
import './styles.css';
import Projects from "../Projects";
import Contact from "../Contact";
import profilepic from '../images/profilepic.jpg';

export default class Home extends React.Component {
    render (){
        return (
        <div id="homeContainer">
            <div id="topContainer">
                <TitleSection />
            </div>
            
            <div id="rightContainer">
                <Projects/>
                <Contact/>
            </div>
        </div>
        );
    }
}




class TitleSection extends React.Component {

    render (){
        return (
            <div id="titleSectionContainer">
                <h1 id="title">Rune Myrskog</h1>
                <h2 id="subtitle">Software Developer</h2>
            </div>
        );
    }
}