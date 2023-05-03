import React from 'react';
import './styles.css';
import { ResumeLink } from '../Components/Media';
export default class Resume extends React.Component {
    render () {
        return (
            <div id="resume">
                <div className="sectionContainer">
                    <span className="sectionTitle">Resume</span>
                    <div>
                        <p>You can access my most up to date resume as a google doc here: <ResumeLink /> </p>
                    </div>
                </div>
            </div>
        )
    }
}