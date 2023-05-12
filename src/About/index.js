import React from 'react';
import './styles.css';
import SectionTitle from '../Components/SectionTitle';
import WorkspacePicture from "../images/workspace-picture.jpg";

export default class About extends React.Component {
    render() {
        return (
            <div id="about" className="section">
                <div id="aboutContainer" className="sectionContainer">
                   
                    <SectionTitle title="About Me" />
                    <div id="aboutInnerContainer">
                       
                            
                            <img id="aboutMeImage" className="mediumImage" src={WorkspacePicture}></img>
                        
                        <div id="aboutMeTextContainer">
                            <div id="aboutMeTextTitleContainer">
                                <span id="aboutMeTextTitle">Passionate software developer based in Toronto</span>
                            </div>
                            <p id="aboutMeText">
                                Hi! My name is Rune Myrskog. I am a software developer based in Toronto, Canada.
                                I enjoy many areas of software including web development, artifical intelligence,
                                cloud computing and more! I have a passion for writing clean, optimized code, always 
                                leveraging the latest technologies to ensure high quality software!
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}