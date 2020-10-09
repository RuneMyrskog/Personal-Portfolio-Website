import React from 'react';
import Media from './Media';
import linkedin_logo from './images/linkedin_logo.jpg';
import gmail_logo from './images/gmail_logo.jpg';

import './css/Media.css';

export default class ContactMe extends React.Component {
    render() {
      return (
          <div id="mediaContainer">
              <ul>
                  <Media icon={gmail_logo} link="RuneMyrskog@gmail.com"/>
                  <Media icon={linkedin_logo} link="linkedin/RuneMyrskog"/>
              </ul>
          </div>
      );
    }
  }

  