import React from 'react';
import "./styles.css";

import TreeJSPic from "../images/TreeJSPic.png";
import pathFindPic from "../images/pathFindPic.png";
import RejuvenateHomePic from "../images/RejuvenateHomePic.png";
import spaceAdventurePic from "../images/spaceAdventurePic.jpg";
import CryptoTrackPic from "../images/cyptotrack.png";
import SneakPeakPic from "../images/sneakpeak.png";

import SectionTitle from '../Components/SectionTitle';


import { GithubLink } from '../Components/Media';

export default class Projects extends React.Component {

    render() {
        return (
            <div id="projects" className="section">
                <div id="projectsContainer" className="sectionContainer">
                    <SectionTitle title="Projects" />
                    <div id="projectListContainer">

                        <Project flipx={false} title={"CryptoTrack"} image={CryptoTrackPic} alt="CryptoTrack" href="https://crypto-track-hq.vercel.app">
                            <p className="projectDescription">
                                Fully responsive, aesthetic website that displays real-time market data for top 50 cryptocurrencies


                            </p>
                            <br />
                            <span className="projectTechnologies">React SCSS</span>
                            <br />
                            <GithubLink href="https://github.com/RuneMyrskog/CryptoTracker" />
                        </Project>

                        <Project flipx={true} title={"SneakPeak"} image={SneakPeakPic} alt="SneakPeak" href="https://ecommerce-c0ccd.web.app">
                            <p className="projectDescription">
                                Shoe store focused on simplicity with with all the expected ecommerce functions, synced to a realtime database
                            </p>
                            <br />
                            <span className="projectTechnologies">Angular Firebase Bootstrap</span>
                            <br />
                            <GithubLink href="https://github.com/RuneMyrskog/SneakPeak" />
                        </Project>

                        <Project flipx={false} title={"Rejuvenate"} image={RejuvenateHomePic} alt="Rejuvenate website" href="https://projectrejuvenate.herokuapp.com">
                            <p className="projectDescription">
                                Full stack social media website targeted towards health enthusiasts, implementing full REST api and all CRUD operations
                            </p>
                            <br />
                            <span className="projectTechnologies">MongoDB Express React NodeJS</span>
                            <br />
                            <GithubLink href="https://github.com/RuneMyrskog/Rejuvenate-Website" />
                        </Project>

                        
                        <Project flipx={true} title={"TreeJS"} image={TreeJSPic} alt="TreeJS" href="https://treejslib.herokuapp.com">
                            <p className="projectDescription">
                                Front end javascript library to render custom tree structures in the DOM
                            </p>
                            <br />
                            <span className="projectTechnologies">Javascript HTML CSS</span>
                            <br />
                            <GithubLink href="https://github.com/RuneMyrskog/TreeJS" />
                        </Project>

                        <Project flipx={false} title={"Space Adventure"} image={spaceAdventurePic} alt="space adventure" href="https://github.com/RuneMyrskog/SpaceAdventure-A-2D-Android-Game">
                            <p className="projectDescription">
                                2D level-based android game developed in Java by myself and 3 other contributors
                            </p>
                            <br/>
                            <span className="projectTechnologies">Java</span>
                            <br/>
                            <GithubLink href="https://github.com/RuneMyrskog/SpaceAdventure-A-2D-Android-Game"/>
                        </Project>

                        <Project flipx={true} title={"AStar Visualized"} image={pathFindPic} alt="astar visualization" href="https://astar-visualizer.vercel.app/">
                            <p className="projectDescription">
                                Implementation and visualiztion of the A-Star path finding
                                algorithm. Written as a python application and as a
                                static webpage.
                            </p>
                            <br />
                            <span className="projectTechnologies">Python Javascript</span>
                            <br />
                            <GithubLink href="https://github.com/RuneMyrskog/PathFindingVisualizer---static-web-page-version" />
                        </Project>

                    </div>
                </div>
            </div>
        );
    }
}

class Project extends React.Component {
    imageSection() {
        return (
        <div className="projectImageContainer">
            <a href={this.props.href} target="_blank">
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
            <div className={"projectExampleContainer " + className}>
                {this.props.flipx ? this.descriptionSection() : this.imageSection()}
                {this.props.flipx ? this.imageSection() : this.descriptionSection()}
            </div>
        );
    }
}