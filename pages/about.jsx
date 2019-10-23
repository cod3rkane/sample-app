import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../components/Layout';

const DivAbout = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.15),0 2px 3px rgba(0,0,0,.2);
  display: flex;
  padding: 1rem;
  flex-direction: column;

  p {
    font-size: 16px;
    font-weight: lighter;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    text-align: justify;
    margin-top: 1rem;
  }
`;
const SpanTitle = styled.span`
  font-size: 22px;
  font-weight: lighter;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  text-align: center;
`;

const About = () => {
  return (
    <Layout>
      <Head>
        <title>JedIn Jobs - About</title>
      </Head>
      <DivAbout>
        <SpanTitle>
          Lorem ipsum dolor sit amet
        </SpanTitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </DivAbout>
    </Layout>
  );
};

export default About;
