import React from 'react';
import {MediaLink} from '../Components/Media';
import github_logo from '../images/github_logo.png';
import NodeLogo from '../images/NodeLogo.png';
import PythonLogo from '../images/PythonLogo.png';
import HtmlCssJsLogo from '../images/HtmlCssJsLogo.png';
import ReactLogo from '../images/ReactLogo.png';
import CLogo from '../images/CLogo.png';
import './styles.css';

export default class Skills extends React.Component {
    render() {
        return (
            <div id="skillsContainer">
                <span className="title">Skills Page</span>

               
                <p className="skillsDescription">
                    Being a 3rd year computer science student with internship experience,
                    there are many technical and soft skills I have cultivated. Below
                    are some of the technologies I am experienced with
                </p>
               

                <ul className="techsContainer">
                    <li>
                        <Technology src={ReactLogo} label="React" alt="React Logo"/>
                    </li>
                    <li>
                        <Technology src={NodeLogo} label="NodeJS" alt="NodeJS Logo"/>
                    </li>
                </ul>

                <ul className = "techsContainer">
                    <li>
                        <Technology src={HtmlCssJsLogo} label="HTML CSS & JS" alt="HTML CSS JS Logo"/>
                    </li>
                    <li>
                        <Technology src={PythonLogo} label="Python" alt="Python Logo"/>
                    </li>
                    <li>
                        <Technology src={CLogo} label="C" alt="C Logo"/>
                    </li>
                </ul>




                <p className="skillsDescription">
                    You can check out my github to look at the projects I have worked on!
                </p>
                <div className="mediaContainer">
                    <div id="githubLink" className="mediaLinkContainer">
                            <MediaLink  href="https://github.com/RuneMyrskog" 
                                    icon={github_logo} 
                                    text="github.com/RuneMyrskog"/>
                    </div>
                </div> 
            </div>
        );
    }
}

class Technology extends React.Component {
    render (){
        return (
            <div className="techContainer">
                <img className="techLogo" src={this.props.src} alt={this.props.alt}></img>
                <span className="techSpan">{this.props.label}</span>
            </div>
        );
    }
}