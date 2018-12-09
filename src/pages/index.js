import React, { Component } from 'react'
import moment from 'moment';
import { SVSCalendar } from '../components/SVS'

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
      <Layout title="State vs State" serverTime={serverTime}>
        <SVSCalendar updateServerTime={this.updateServerTime} />
      </Layout>
    )
  }
}

export default IndexPage
