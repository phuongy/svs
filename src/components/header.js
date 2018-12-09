import React from 'react'
import styled from 'react-emotion'
// import { Link } from 'gatsby'

import { CONTENT_WIDTH } from '../constants'

class Header extends React.Component {
  render() {
    const { title, serverTime } = this.props;

    return (
      <HeaderWrapper>
        <Content>
          <h2>{title}</h2>
          {serverTime && <div>{serverTime.format('llll')}</div>}
        </Content>
      </HeaderWrapper>
    )
  }
}

export default Header

const HeaderWrapper = styled.header`
  font-size: 0.75rem;
  padding: 1rem 1rem 0;
`

const Content = styled.div`
  align-items: flex-start;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-size: .875rem;
  margin: 0 auto;
  width: 100%;

  h2 {
    margin: 0 1rem 0 0;
  }

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
