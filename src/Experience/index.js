import React from 'react';
import './styles.css';
export default class Experiences extends React.Component {
    render() {
        return (
            <div id="experience">
                <div className="sectionContainer">
                    <span className="sectionTitle">Experience</span>

                    <Experience title="IBM Canada, Software Developer">
                        <p>ewoifrweiofjowief</p>
                        <p>soiejfwpiefjwpef</p>
                        <p>wpiejfwiejfpowjef</p>
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
        const className = this.props.flipx ? "projectExampleContainer right" : "projectExampleContainer left"
        return (
            <div className={className}>
                {this.props.flipx ? this.descriptionSection() : this.titleSection()}
                {this.props.flipx ? this.titleSection() : this.descriptionSection()}
            </div>
        );
    }
}