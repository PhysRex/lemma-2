import React, { Component } from 'react';

import './App.scss';

import { Homepage } from './components/pages';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <Homepage />
      </div>
    );
  }
}

export default App;
