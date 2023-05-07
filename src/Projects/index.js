import React from 'react';
import "./styles.css";
import TreeJSPic from "../images/TreeJSPic.png";
import pathFindPic from "../images/pathFindPic.png";
import RejuvenateHomePic from "../images/RejuvenateHomePic.png";
import spaceAdventurePic from "../images/spaceAdventurePic.jpg";
import SectionTitle from '../Components/SectionTitle';

export default class Projects extends React.Component {

    render() {
        return (
            <div id="projects">
                <div className="sectionContainer">
                    <SectionTitle title="Projects"/>

                    <Project flipx={false} title={"TreeJS"} image={TreeJSPic} alt="TreeJS" href="https://treejslib.herokuapp.com">
                        <p className="projectDescription">
                            TreeJS is a front end Javascript library. It is written to provide a 
                            simple way of displaying customized tree structures in the DOM.
                            The full API documentation and examples of the library can be found at
                            the landing page <a href="https://treejslib.herokuapp.com/">Here</a>
                        </p>
                    </Project>

                    <Project flipx={true} title={"AStar Visualized"} image={pathFindPic} alt="astar visualization" href="https://astarvisualize.herokuapp.com">
                        <p className="projectDescription">
                            This project is an implementation and visualiztion of the A-Star path finding 
                            algorithm. This project was written as an application in python and as a 
                            static webpage in Javascript. You can visit the webpage and see the algorithm i
                            action <a href="https://astarvisualize.herokuapp.com/">Here</a>
                        </p>
                    </Project>

                    <Project flipx={false} title={"Rejuvenate"} image={RejuvenateHomePic} alt="Rejuvenate website" href="https://projectrejuvenate.herokuapp.com">
                        <p className="projectDescription">
                            Rejuvenate is a social media website targeted towards health enthusiasts. It was created
                            to be used as a forum for sharing advice and motivation. This is a full stack application
                            using the MERN stack. You can use the site yourself by visiting the site <a href="https://projectrejuvenate.herokuapp.com/">Here</a>
                            
                        </p>
                    </Project>

                    <Project flipx={true} title={"Space Adventure"} image={spaceAdventurePic} alt="space adventure" href="https://github.com/RuneMyrskog/SpaceAdventure-A-2D-Android-Game">
                        <p className="projectDescription">
                            Space Adventure is an android game developed in Java by myself and 3 other contributors
                            listed in the <a href="https://github.com/RuneMyrskog/SpaceAdventure-A-2D-Android-Game">github repository</a>. The game consists of several 2d minigames played as 
                            sequential levels
                        </p>
                    </Project>
                    {/* <Project flipx={false} image={spidrPic} alt="spidr" href="https://github.com/RuneMyrskog/SpaceAdventure-A-2D-Android-Game">
                        <p className="projectDescription">
                            Spidr is a cross-platform social media app I helped to develop during its inception alongside two other software developers. The app was written using Dart/Flutter. 
                            I created the search engine using a combination of Algolia and firebase cloud functions, and also programmed animations used within the app.
                        </p>
                    </Project> */}

                </div>
            </div>
        );
    }
}

class Project extends React.Component {
    imageSection() {
        return (
        <div className="projectImageContainer">
            <a href={this.props.href}>
                <img className="projectImage" src={this.props.image} alt={this.props.alt} />
            </a>
        </div>
        );
    }

    descriptionSection() {
        return (
        <div className="projectDescriptionContainer">
            <div className="projectTitleContainer">
                <span className="projectTitle">{this.props.title}</span>
            </div>
            {this.props.children}
        </div>
        );
    }

    render() {
        const className = this.props.flipx ? "right" : "left"
        return (
            <div className={"projectAlignContainer " + className}>
                <div className={"projectExampleContainer " + className}>
                    {this.props.flipx ? this.descriptionSection() : this.imageSection()}
                    {this.props.flipx ? this.imageSection() : this.descriptionSection()}
                </div>
            </div>
        );
    }
}