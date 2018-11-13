import React from 'react'
import styled from 'react-emotion'
// import { Link } from 'gatsby'

import { CONTENT_WIDTH } from '../constants'

class Header extends React.Component {
  render() {
    const { serverTime } = this.props;

    return (
      <HeaderWrapper>
        <Content>
          {serverTime && <div>Server time: {serverTime.format()}</div>}
        </Content>
      </HeaderWrapper>
    )
  }
}

export default Header

const HeaderWrapper = styled.header`
  background: #000;
  color: #fff;
`

const Content = styled.div`
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-size: .875rem;
  margin: 0 auto;
  max-width: ${CONTENT_WIDTH};
  padding: 0.33rem 0.5rem;
  width: 100%;

  div {
    flex: 1;
  }

  div:first-of-type {
    flex: 1;
  }

  div:last-of-type {
    text-align: right;
  }
`;
