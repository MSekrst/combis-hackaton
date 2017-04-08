import React, { PropTypes } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'

const Header = styled.header`
  margin: -20px;
  padding: 30px;
  text-align: center;
`

const Layout = ({ children, title, showHeader }) => (
  <div style={{ padding: 20 }}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    {showHeader &&
    <Header>
      <Link
        prefetch
        href="/"
      >
        <a>
          <img
            style={{width: 50, height: 50}}
            src="/static/img/logo.png"
            alt="Tigrovi" />
        </a>
      </Link>
    </Header>
    }

    {children}

  </div>
)

Layout.propTypes = {
  title: PropTypes.string,
  showHeader: PropTypes.bool,
}

Layout.defaultProps = {
  title: 'Tigrovi',
  showHeader: true,
}

export default Layout

