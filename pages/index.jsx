import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Layout from '../components/Layout';
import JobSearch from '../components/JobSearch';
import JobCard from '../components/JobCard';
import StorePropTypes from '../store/types';
import { getJobList, jobSearch } from '../store/reducers/jobs/actions';

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

const Home = ({ jobs, onSearch }) => {
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
      <JobSearch onSearch={onSearch} />
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

Home.defaultProps = {
  jobs: [],
};

Home.propTypes = {
  jobs: StorePropTypes.JobPropType,
  onSearch: PropTypes.func.isRequired,
};

Home.getInitialProps = async ({ req, store }) => {
  if (!req) {
    store.dispatch(getJobList());
  }
};

const mapStateToProps = ({ jobs }) => ({ jobs });
const mapDispatchToProps = (dispatch) => ({
  onSearch: (text) => dispatch(jobSearch(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
