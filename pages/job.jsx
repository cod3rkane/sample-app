/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Head from 'next/head';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';

import Layout from '../components/Layout';

const DivJob = styled.div`
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(0,0,0,.15),0 2px 3px rgba(0,0,0,.2);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  height: 218px;
  padding: 1rem;

  > h1 {
    font-weight: lighter;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 26px;
    margin-bottom: 1rem;
  }

  p {
    font-weight: lighter;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 16px;
    margin-bottom: 1rem;
  }
`;
const DivContent = styled.div`
  flex: 1;
`;
const DivRelatedWrapper = styled.div`
  margin-top: 1rem;

  > p {
    font-weight: lighter;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 16px;
  }
`;
const DivRealtedList = styled.div`
  margin-top: 1rem;

  > div {
    margin: 1rem 0;
  }
`;
const DivRelatedItem = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(0,0,0,.15);
  padding-bottom: 0.4rem;
  cursor: pointer;

  span {
    display: block;
    font-weight: lighter;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    margin-bottom: 0.4rem;

    :first-of-type {
      font-size: 22px;
    }
  }
`;

const RelatedList = ({ relatedJobs }) => {
  const items = relatedJobs.map((e) => (
    <Link key={e.id} href="/job/[id]" as={`/job/${e.id}`}>
      <DivRelatedItem>
        <span>{e.title}</span>
        <span>{e.employment_type}</span>
      </DivRelatedItem>
    </Link>
  ));

  return (
    <DivRealtedList>
      {items}
    </DivRealtedList>
  );
};

RelatedList.defaultProps = {
  relatedJobs: [],
};

RelatedList.propTypes = {
  relatedJobs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    employment_type: PropTypes.string.isRequired,
  })),
};

const Job = ({
  id,
  title,
  description,
  employment_type,
  relatedJobs,
}) => (
  <Layout>
    <Head>
      <title>
        JedIn Jobs - Job (
        {id}
        )
      </title>
    </Head>
    <DivJob>
      <h1>{title}</h1>
      <DivContent>
        <p>
          <FormattedMessage tagName="span" id={`jobcard.type.${employment_type}`} defaultMessage="Type" />
        </p>
        {description}
      </DivContent>
    </DivJob>
    {relatedJobs.length > 0 && (
      <DivRelatedWrapper>
        <p>
          <FormattedMessage id="job.related" defaultMessage="People also viewed" />
        </p>
        <RelatedList relatedJobs={relatedJobs} />
      </DivRelatedWrapper>
    )}
  </Layout>
);

Job.defaultProps = {
  relatedJobs: [],
};

Job.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  employment_type: PropTypes.string.isRequired,
  relatedJobs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    employment_type: PropTypes.string.isRequired,
  })),
};

Job.getInitialProps = async ({ ctx }) => {
  if (ctx) {
    const {
      id,
      title,
      description,
      employment_type,
      relatedJobs,
    } = ctx.query;

    return {
      id,
      title,
      description,
      employment_type,
      relatedJobs,
    };
  }

  return {};
};

export default Job;
