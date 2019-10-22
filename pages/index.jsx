import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from '../components/Layout';

const Home = ({}) => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      Hi
    </Layout>
  )
}

Home.propTypes = {};

export default Home;