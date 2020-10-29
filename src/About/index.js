import React from 'react';
import './styles.css';

export default class About extends React.Component {
    render() {
        return (
            <div id="aboutContainer">
                <span className="title">About page</span>

                <p id="aboutDescription"> I am currently a 3rd year computer science student at the University
                    of Toronto. While I have experience in both front and back end development,
                    I am interested in Machine Learning techniques and love applying
                    Machine Learning algorithms to classification problems. 
                    <br/><br/>
                    


                </p>
            </div>
            
        );
    }
}