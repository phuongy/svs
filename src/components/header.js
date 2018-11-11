import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'

import { CLIENT_TIME, WORLD_TIME, CONTENT_WIDTH } from '../constants'

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Content>
      <div>local time: {CLIENT_TIME.format('llll')}</div>
      <div>game time: {WORLD_TIME.format()}</div>
    </Content>
  </HeaderWrapper>
)

export default Header

const HeaderWrapper = styled.header`
  background: #000;
  color: #fff;
`

const Content = styled.div`
  display: flex;
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
