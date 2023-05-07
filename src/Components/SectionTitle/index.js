import React from 'react';
import './styles.css';



export default class SectionTitle extends React.Component {

    render() {
        return (
            <div className="sectionTitleContainer">
                <p className="sectionTitle">{this.props.title}</p>
            </div>
        )
    }
}