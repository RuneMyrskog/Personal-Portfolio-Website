import React from 'react';
import resume1 from '../images/Rune-Myrskog-Resume-2020-1.png';
import resume2 from '../images/Rune-Myrskog-Resume-2020-2.png';
import './styles.css';
export default class Resume extends React.Component {
    render () {
        return (
            <div id="resumeContainer">
                <img className = "resumePic" src={resume1} alt="resume"></img>
                <img className = "resumePic" src={resume2} alt="resume"></img>
            </div>
        )
    }
}