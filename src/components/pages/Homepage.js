import React, { Component } from 'react';

import Banner from '../presentational/Banner';

class Homepage extends Component {
  state = {
    settings: {},
  }

  render() {
    const { settings } = this.state;
    return (
      <div>
        <Banner settings={settings} />
      </div>
    );
  }
}

export default Homepage;
