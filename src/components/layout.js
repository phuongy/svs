import React from 'react'
import styled from 'react-emotion'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

import { CONTENT_WIDTH } from '../constants'

import './layout.css'

const Layout = ({ children }) => (
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
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
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
  padding: 2rem 0.5rem;
`
