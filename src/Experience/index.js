import React from 'react';
import './styles.css';
export default class Experiences extends React.Component {
    render() {
        return (
            <div id="experience">
                <div className="sectionContainer">
                    <span className="sectionTitle">Experience</span>

                    <Experience title="IBM Canada, Software Developer">
                        <p>Worked in scrum team focusing on engine code for IBM’s Db2 and Data Virtualization products using linux, C++, Perl, SQL, Jenkins, shell scripting</p>
                        <p>Independently designed / developed Perl framework for simulating realistic Db2 work loads</p>
                        <p>Successfully onboarded and mentored new interns</p>
                        <p>Experience with agile software development lifecycle, continuous integration and deployment </p>

                    </Experience>
                    <Experience title="Morgan Solar, Software Developer Intern">
                        <p>Developed data scraping software for tracking industry silicon price trends using Python, deployed using Docker, Google Cloud Services</p>
                        <p>Independently developed socket driver in Python for various power supplies to support calibration of Morgan Solar’s data acquisition product</p>
                        <p>Updated and refactored calibration software for their solar data acquisition product</p>
                    </Experience>

                </div>
            </div>
        )
    }
}


class Experience extends React.Component {
    titleSection() {
        return (
            <div className="experienceTitleContainer">
               <span className="experienceTitle">{this.props.title}</span>
            </div>
        );
    }

    descriptionSection() {
        return (
            <div className="experienceDescriptionContainer">
                <ul>
                {this.props.children.map((note) => 
                    <li>{note}</li>
                )}
                </ul>
            </div>
        );
    }

    render() {
        const className = this.props.flipx ? "experienceExampleContainer right" : "experienceExampleContainer left"
        return (
            <div className={className}>
                {this.props.flipx ? this.descriptionSection() : this.titleSection()}
                {this.props.flipx ? this.titleSection() : this.descriptionSection()}
            </div>
        );
    }
}