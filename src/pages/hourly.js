import React, { Component } from 'react'
import moment from 'moment';
import { Hourly } from '../components/Hourly'

import Layout from '../components/layout'

class HourlyPage extends Component {
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
        <Hourly updateServerTime={this.updateServerTime} />
      </Layout>
    )
  }
}

export default HourlyPage
