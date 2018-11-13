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
          {serverTime && <div>Server time: {serverTime.format('llll')}</div>}
        </Content>
      </HeaderWrapper>
    )
  }
}

export default Header

const HeaderWrapper = styled.header`
  background: #3D3D3F;
  color: #fff;
  font-size: 0.75rem;
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
