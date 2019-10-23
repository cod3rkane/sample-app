import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Layout from '../components/Layout';
import JobSearch from '../components/JobSearch';
import JobCard from '../components/JobCard';
import StorePropTypes from '../store/types';

const DivContent = styled.div`
  margin-top: 1rem;

  > div {
    margin-top: 1rem;
  }
`;
const SpanFoundJobs = styled.span`
  display: block;
  font-size: 12px;
  font-weight: lighter;
  font-family: 'Lato',sans-serif;
  font-style: normal;
  text-align: left;
  margin-top: 1rem;
`;
const DivEmtpty = styled.div`
  display: flex;
  align-items: center;
  height: 128px;

  p {
    font-size: 22px;
    font-weight: lighter;
    font-family: 'Lato',sans-serif;
    font-style: normal;
    text-align: center;
  }
`;

const EmptyList = () => (
  <DivEmtpty>
    <p>
      <FormattedMessage id="joblist.empty" defaultMessage="Ooh no, there are no results that match your search." />
    </p>
  </DivEmtpty>
);

const Home = ({ jobs }) => {
  const items = jobs.list.map((e) => (
    <JobCard
      key={e.id}
      id={e.id}
      title={e.title}
      type={e.employment_type}
      description={e.description}
    />
  ));

  return (
    <Layout>
      <Head>
        <title>JedIn Jobs - Home</title>
      </Head>
      <JobSearch onSearch={console.log} />
      <SpanFoundJobs>
        <FormattedMessage id="joblist.found_jobs" defaultMessage="We've found {count, plural, =0 {no jobs} one {# job} other {# jobs}}" values={{ count: jobs.list.length }} />
      </SpanFoundJobs>
      <DivContent>
        {items}
        {items.length === 0 && <EmptyList />}
      </DivContent>
    </Layout>
  );
};

Home.propTypes = {
  jobs: StorePropTypes.JobPropType,
};

const mapStateToProps = ({ jobs }) => ({ jobs });

export default connect(mapStateToProps)(Home);
