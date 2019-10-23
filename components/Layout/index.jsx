import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';

const DivWrapper = styled.div`
  main {
    padding: 1.2rem;
  }
`;
const HeaderBar = styled.header`
  background-color: #32546d;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;

  > h3 {
    font-weight: 800;
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
        <h3>Jedi Jobs</h3>
        <nav>
          <Link href="/jobs">
            <a>
              <FormattedMessage id="navbar.header.jobs" defaultMessage="Jobs" />
            </a>
          </Link>
          <Link href="/about">
            <a>
              <FormattedMessage id="navbar.header.help" defaultMessage="Help" />
            </a>
          </Link>
        </nav>
      </HeaderBar>
      <main>{children}</main>
    </DivWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
