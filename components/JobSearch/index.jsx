import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import PrimaryButton from '../PrimaryButton';

const DivJobSearch = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.15),0 2px 3px rgba(0,0,0,.2);
  display: flex;
  height: 128px;
  padding: 1rem;
  flex-direction: column;
`;
const SpanTitle = styled.span`
  font-size: 22px;
  font-weight: lighter;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  text-align: center;
`;
const InputText = styled.input`
  font-size: 16px;
  line-height: 1.75;
  font-weight: 400;
  color: rgba(0, 0, 0, .9);
  border: 1px solid rgba(0,0,0,.15);
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border-radius: 2px;

  :hover {
    border-color: #000;
  }
`;
const DivForm = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 100%;

  input {
    flex-basis: 70%;
    margin-right: 0.4rem;
  }

  button {
    flex-basis: 30%;
  }
`;

const JobSearch = ({ onSearch }) => {
  const [text, setText] = useState('');

  return (
    <DivJobSearch>
      <SpanTitle>
        <FormattedMessage id="jobsearch.title" defaultMessage="Your dream job’s just a search away…" />
      </SpanTitle>
      <DivForm>
        <InputText placeholder="Search Jobs" value={text} onChange={(e) => setText(e.target.value)} type="search" name="search_job" id="search_job" />
        <PrimaryButton onClick={() => onSearch(text)}>
          <FormattedMessage id="jobsearch.search.cta" defaultMessage="Search" />
        </PrimaryButton>
      </DivForm>
    </DivJobSearch>
  );
};

JobSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default JobSearch;
