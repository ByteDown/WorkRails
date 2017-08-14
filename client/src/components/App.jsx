import React from 'react';

import Auth from './Auth.js';
const auth = new Auth();

export default class App extends React.Component {
  render() {
    // TODO: Put this into an onClick handler for the login button
    auth.login();

    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
      </div>
    );
  }
}
