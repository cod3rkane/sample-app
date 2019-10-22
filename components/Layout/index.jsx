import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';

const DivLayout = styled.div`
  > main {
    padding: 4.6rem 1.2rem;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`

export const Layout = ({ children }) => {
  return (
    <DivLayout>
      <main>
        {children}
      </main>
    </DivLayout>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
