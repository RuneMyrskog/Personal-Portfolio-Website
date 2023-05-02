import React from 'react';
import resume1 from '../images/Resume-1.png';
import resume2 from '../images/Resume-2.png';
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