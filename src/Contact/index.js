import React from 'react';
import {MediaSpan, MediaLink} from '../Components/Media';
import linkedin_logo from '../images/linkedin_logo.jpg';
import gmail_logo from '../images/gmail_logo.jpg';

import './styles.css';

export default class Contact extends React.Component {
    render() {
      return (
        <div>
          <div className="mediaContainer">
            <div className="mediaSpanContainer">
                <MediaSpan icon={gmail_logo} text="RuneMyrskog@gmail.com"/>
            </div>
                
            <div className="mediaLinkContainer">
                <MediaLink icon={linkedin_logo} 
                        text="linkedin/RuneMyrskog"
                        href="https://www.linkedin.com/in/rune-myrskog-21a7901a8/"/>
            
            </div>
          </div>
        </div>
      );
    }
  }