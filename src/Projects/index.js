import React from 'react';
import "./styles.css";
import TreeJSPic from "../images/TreeJSPic.png";
import pathFindPic from "../images/pathFindPic.png";
import RejuvenateHomePic from "../images/RejuvenateHomePic.png";
import spaceAdventurePic from "../images/spaceAdventurePic.jpg";

export default class Projects extends React.Component {

    render() {
        return (
            <div id="projectsContainer">
                <div className="sectionContainer">
                    <span className="title">Projects</span>
                    <p className="description">
                        Here are some of the most recent projects I have worked on
                    </p>

                    <Project image={TreeJSPic} alt="TreeJS" href="https://treejslib.herokuapp.com">
                        <p className="projectDescription">
                            TreeJS is a front end Javascript library. It is written to provide a 
                            simple way of displaying customized tree structures in the DOM.
                            The full API documentation and examples of the library can be found at
                            the landing page <a href="https://treejslib.herokuapp.com/">Here</a>
                        </p>
                    </Project>

                    <Project image={pathFindPic} alt="astar visualization" href="https://astarvisualize.herokuapp.com">
                        <p className="projectDescription">
                            This project is an implementation and visualiztion of the A-Star path finding 
                            algorithm. This project was written as an application in python and as a 
                            static webpage in Javascript. You can visit the webpage and see the algorithm i
                            action <a href="https://astarvisualize.herokuapp.com/">Here</a>
                        </p>
                    </Project>

                    <Project image={RejuvenateHomePic} alt="Rejuvenate website" href="https://projectrejuvenate.herokuapp.com">
                        <p className="projectDescription">
                            Rejuvenate is a social media website targeted towards health enthusiasts. It was created
                            to be used as a forum for sharing advice and motivation. This is a full stack application
                            using the MERN stack. You can use the site yourself by visiting the site <a href="https://projectrejuvenate.herokuapp.com/">Here</a>
                            
                        </p>
                    </Project>

                    <Project image={spaceAdventurePic} alt="space adventure" href="https://github.com/RuneMyrskog/SpaceAdventure-A-2D-Android-Game">
                        <p className="projectDescription">
                            Space Adventure is an android game developed in Java by myself and 3 other contributors
                            listed in the <a href="https://github.com/RuneMyrskog/SpaceAdventure-A-2D-Android-Game">github repository</a>. The game consists of several 2d minigames played as 
                            sequential levels
                        </p>
                    </Project>

                </div>
            </div>
        );
    }
}

class Project extends React.Component {
    render() {
        return (
            <div className="projectExampleContainer">
                <div className="projectImageContainer">
                    <a href={this.props.href}>
                        <img className="projectImage" src={this.props.image} alt={this.props.alt}/>
                    </a>
                </div>
                <div className="projectDescriptionContainer">
                    {this.props.children}
                </div>
            </div>
        );
    }
}