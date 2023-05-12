import React from 'react';
import './styles.css';
import { GithubLink, LinkedinLink } from '../Media';

export default class Footer extends React.Component {
    render() {
        return (
                <div className="section">
                    <div id="footerContainer" className="sectionContainer">
                        <h3>Copyright © 2023. All rights are reserved</h3>
                        <div className="footer-socials-container">
                            <GithubLink />
                            <LinkedinLink />
                        </div>
                    </div>
                </div>
        );
    }
}