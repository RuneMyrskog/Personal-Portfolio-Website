import React from 'react';
import Media from './Media';
import github_logo from './images/github_logo.png';
import './css/Media.css';
import './css/Skills.css';

export default class Skills extends React.Component {
    render() {
        return (
            <div id="skillsContainer">
                <p>Skills Page</p>
                <div id="mediaContainer">
                    <Media icon={github_logo} link="github.com/RuneMyrskog"/>
                </div>
            </div>
        );
    }
}