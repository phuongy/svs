import React from 'react'
import styled from 'react-emotion'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

import { CONTENT_WIDTH } from '../constants'

import './layout.css'

const Layout = ({ title, serverTime, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title="Last Shelter :: SvS Calendar"
          meta={[
            { name: 'description', content: 'Timers to help you plan your build / research / gathering etc for the State vs State events in game.' }, ,
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header title={title} serverTime={serverTime} />
        <Main>
          {children}
        </Main>
      </>
    )}
  />
)

export default Layout

const Main = styled.main`
  margin: 0 auto;
  max-width: ${CONTENT_WIDTH};
  padding: 1rem;
`
