import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <FormattedMessage id="greeting" />
    </Layout>
  );
};

Home.propTypes = {};

export default Home;
