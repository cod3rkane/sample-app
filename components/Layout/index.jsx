import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderBar = styled.header`
  background-color: #152537;
  color: #fff;
  padding: 0.6rem;
`;

export const Layout = ({ children }) => {
  return (
    <div id="app">
      <HeaderBar>
        <h3>Jedi Jobs</h3>
      </HeaderBar>
      <main>{children}</main>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background-color: #f2f2f2;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          padding: 0;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
