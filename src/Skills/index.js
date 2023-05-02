import React from 'react';
import NodeLogo from '../images/NodeLogo.png';
import PythonLogo from '../images/PythonLogo.png';
import HtmlCssJsLogo from '../images/HtmlCssJsLogo.png';
import ReactLogo from '../images/ReactLogo.png';
import CLogo from '../images/CLogo.png';
import MongoDBLogo from "../images/MongoDBLogo.png";
import './styles.css';

export default class Skills extends React.Component {
    render() {
        return (
            <div id="skillsContainer">

               <div className="sectionContainer">
                   <span className="title">Skills</span>
                
                <p className="description">
                    There are many technical and soft skills I have cultivated. Below
                    are some of the technologies I am experienced with
                </p>
                </div>
               

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
                    <li>
                        <Technology src={MongoDBLogo} label="MongoDB" alt="MongoDB Logo"/>
                    </li>
                </ul>

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