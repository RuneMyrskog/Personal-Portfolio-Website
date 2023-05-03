import React from 'react';
import './styles.css';
import Projects from "../Projects";
import Contact from "../Contact";
import Resume from '../Resume';
import Experience from '../Experience';
import { DownArrow } from '../Components/Media';

export default class Home extends React.Component {
    render (){
        return (
        <div id="homeContainer">
            <div id="topContainer">
                <TitleSection />
                <DownArrow/>
            </div>
            
            <div id="rightContainer">
                <Projects/>
                <Experience/>
                <Resume/>
                <Contact/>
            </div>
        </div>
        );
    }
}




class TitleSection extends React.Component {

    render (){
        return (
            <div id="titleSectionContainer">
                <h1 id="nameTitle">Rune Myrskog</h1>
                <h2 id="nameSubtitle">Software Developer</h2>
            </div>
        );
    }
}