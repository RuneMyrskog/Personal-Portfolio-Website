import React from 'react';
import './styles.css';

export class MediaSpan extends React.Component {
    render () {
        return (
            <li className ="media">
                <img className="mediaIcon" src={this.props.icon} alt="icon"></img>
                <span className="mediaSpan">{this.props.text}</span>
            </li>
        );
    }
}

export class MediaLink extends React.Component {
    render() {
        return (
            <li className ="media">
                <img className="mediaIcon" src={this.props.icon} alt="icon"></img>
                <a className="mediaLink" href={this.props.href}>{this.props.text}</a>
            </li>
        );
    }
}
