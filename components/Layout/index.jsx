import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';

const DivWrapper = styled.div`
  main {
    padding: 1.2rem;

    @media (min-width: 1200px) {
      max-width: 1200px;
      margin: 0 auto;
    }
  }
`;
const HeaderBar = styled.header`
  background-color: #0073b1;
  color: #fff;
  padding: 1.2rem;

  > div {
    display: flex;
    justify-content: space-between;

    @media (min-width: 1200px) {
      max-width: 1200px;
      margin: 0 auto;
    }
  }

  > div > a {
    font-weight: lighter;
    font-style: normal;
    font-family: 'Lato', sans-serif;
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
  }

  nav {
    a {
      color: rgba(255, 255, 255, 1);
      font-weight: lighter;
      text-decoration: none;
      font-size: 14px;
      font-weight: lighter;
      font-style: normal;
      font-family: 'Lato', sans-serif;
      margin: 0 1rem;
    }
  }
`;

const Layout = ({ children }) => {
  return (
    <DivWrapper id="app">
      <HeaderBar>
        <div>
          <Link href="/">
            <a>
              JedIn
            </a>
          </Link>
          <nav>
            <Link href="/">
              <a>
                <FormattedMessage id="navbar.header.jobs" defaultMessage="Jobs" />
              </a>
            </Link>
            <Link href="/about">
              <a>
                <FormattedMessage id="navbar.header.about" defaultMessage="About" />
              </a>
            </Link>
          </nav>
        </div>
      </HeaderBar>
      <main>{children}</main>
    </DivWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
