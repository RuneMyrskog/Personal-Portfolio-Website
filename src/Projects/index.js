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

                    <Project image={TreeJSPic} href="https://treejslib.herokuapp.com">
                        <p className="projectDescription">
                            description for TreeJS
                        </p>
                    </Project>

                    <Project image={pathFindPic} href="https://astarvisualize.herokuapp.com">
                        <p className="projectDescription">
                            description for path find visualizer
                        </p>
                    </Project>

                    <Project image={RejuvenateHomePic} href="https://projectrejuvenate.herokuapp.com">
                        <p className="projectDescription">
                            description for Rejuvenate
                        </p>
                    </Project>

                    <Project image={spaceAdventurePic} href="https://github.com/RuneMyrskog/SpaceAdventure-A-2D-Android-Game">
                        <p className="projectDescription">
                            description for space Adnventure
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
                        <img className="projectImage" src={this.props.image} />
                    </a>
                </div>
                <div className="projectDescriptionContainer">
                    {this.props.children}
                </div>
            </div>
        );
    }
}