import React from 'react';
import './styles.css';
import Projects from "../Projects";
import Contact from "../Contact";
// import Resume from '../Resume';
import Experiences from '../Experience';
import About from '../About';
import {GithubLink, LinkedinLink, } from '../Components/Media';

export default class Home extends React.Component {
    render (){
        return (
            <div id="home">
                {/* <Squiggle /> */}
                <div id="topContainer">
                    <Squiggle />
                    <div id="nameAndTitleContainer">
                        <TitleSection />
                        <div id="profilePicContainer">
                            <div id="profilePic"></div>
                        </div>
                    </div>
                    {/* <div className="downArrowContainer">
                        <DownArrow href="#projects"/>
                    </div> */}
                </div>

                <About/>
                <Projects/>
                <Contact/>

            </div>
        );
    }
}

const Squiggle = () => (<svg id="squiggle" width="1440" height="963" viewBox="0 0 1440 963" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path  d="M-23 190.788C47.3224 99.314 243.695 -58.7603 466.603 40.7319C745.24 165.097 658.663 469.88 898.489 590.742C1138.32 711.604 1401.66 521.602 1147.27 447.109C872 366.5 1093 -18.4999 1313.96 306.979C1428.91 476.312 1470.36 565.825 1214.94 765.32C958 966 1214.94 1019.89 1377.15 860.492C1506.91 732.974 1484.29 637.646 1456.76 605.922" stroke="url(#paint0_linear_101_473)" strokeWidth="18"></path>
    <defs>
        <linearGradient id="paint0_linear_101_473" x1="0.883112" y1="163.346" x2="1437.89" y2="150.625" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF00B8"></stop>
            <stop offset="0.229167" stopColor="#06D6A0"></stop>
            <stop offset="0.640625" stopColor="#405CF2"></stop>
            <stop offset="1" stopColor="#FA8C2B"></stop>
        </linearGradient>
    </defs>
    </svg>)


class TitleSection extends React.Component {

    render (){
        return (
            <div id="titleSectionContainer">
                <h1 id="nameTitle">Software Developer</h1>
                <div id="nameSubtitleContainer">
                    <span id="nameSubtitle">Hi, im Rune. I'm a software developer based in Toronto, Canada. 
                    <br/>
                    <br/>
                    <GithubLink /> <LinkedinLink /></span>
                </div>
            </div>
        );
    }
}