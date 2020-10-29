import React from 'react';
import profilepic from '../images/profilepic.jpeg';
import './styles.css';

export default class Home extends React.Component {
    render (){
        return (
        <div id="homeContainer">
            <img id="profilepic" src={profilepic} alt="profile pic"></img>
            <Name/>
            <Description/>
            
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
  
class Description extends React.Component {

    render (){
        return (
            <div id="descriptionContainer">
            <p id="description">
            Reliable software developer motivated to build relationships 
            and looking to utilize my software skills and knowledge to make valuable 
            contributions to a team.
            </p>
            </div>
        );
    }
}