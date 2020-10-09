import React from 'react';

export default class Media extends React.Component {
    render () {
        return (
            <li className ="media">
                <img className="mediaIcon" src={this.props.icon} alt="icon"></img>
                <span className="mediaLink">{this.props.link}</span>
            </li>
        );
    }
}

