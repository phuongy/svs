import React, { Component } from 'react'
import moment from 'moment';
import { SVSCalculator } from '../components/svs'

import Layout from '../components/layout'

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serverTime: moment().utcOffset(-2)
    }
  }

  updateServerTime = () => {
    this.setState({ serverTime: moment().utcOffset(-2) });
  }

  render() {
    const { serverTime } = this.state;

    return (
      <Layout serverTime={serverTime}>
        <SVSCalculator updateServerTime={this.updateServerTime} />
      </Layout>
    )
  }
}

export default IndexPage
