import React from 'react';
import Head from 'next/head';
import { FormattedMessage } from 'react-intl';

import Layout from '../components/Layout';
import JobSearch from '../components/JobSearch';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Jedi Jobs - Home</title>
      </Head>
      <JobSearch onSearch={console.log} />
    </Layout>
  );
};

Home.propTypes = {};

export default Home;
