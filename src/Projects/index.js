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
                            Front end javascript library to render custom tree structures in the DOM. 
                        </p>
                    </Project>

                    <Project flipx={true} title={"AStar Visualized"} image={pathFindPic} alt="astar visualization" href="https://astarvisualize.herokuapp.com">
                        <p className="projectDescription">
                            Implementation and visualiztion of the A-Star path finding 
                            algorithm. Written as a python application and as a 
                            static webpage.
                        </p>
                    </Project>

                    <Project flipx={false} title={"Rejuvenate"} image={RejuvenateHomePic} alt="Rejuvenate website" href="https://projectrejuvenate.herokuapp.com">
                        <p className="projectDescription">
                            Full stack social media website targeted towards health enthusiasts, implementing full REST api and all CRUD operations.
                            
                        </p>
                    </Project>

                    <Project flipx={true} title={"Space Adventure"} image={spaceAdventurePic} alt="space adventure" href="https://github.com/RuneMyrskog/SpaceAdventure-A-2D-Android-Game">
                        <p className="projectDescription">
                            2D level-based android game developed in Java by myself and 3 other contributors
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