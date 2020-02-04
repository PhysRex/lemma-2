import React, { Component } from 'react'

import Banner from '../presentational/Banner'

class Homepage extends Component {
  state = {
    settings: {}
  }

  render() {
    return (
      <div>
        <Banner />
      </div>
    );
  }
}

export default Homepage;
