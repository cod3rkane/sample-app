import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import PrimaryButton from '../PrimaryButton';

const DivCard = styled.div`
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(0,0,0,.15),0 2px 3px rgba(0,0,0,.2);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  height: 218px;
  padding: 1rem;
`;
const DivHeader = styled.div`
  flex: 1;

  p {
    font-weight: lighter;
    font-family: 'Lato', sans-serif;
    font-style: normal;

    :first-of-type {
      font-size: 26px;
    }

    :last-of-type {
      margin-top: 1rem;
      font-size: 18px;
    }
  }
`;

const truncText = (text = '', max = 100) => {
  if (!text) return null;
  if (text.length < max) {
    return text;
  }
  const substr = text.substring(0, max);

  return `${substr.substring(0, substr.lastIndexOf(' ')).trimRight()}...`;
};

const JobCard = ({ title, type, description, onClick }) => {
  return (
    <DivCard>
      <DivHeader>
        <p>
          <span>{title}</span>
        </p>
        <p>
          <FormattedMessage tagName="span" id={`jobcard.type.${type}`} defaultMessage="Type" />
        </p>
        <p>
          {truncText(description)}
        </p>
      </DivHeader>
      <div>
        <PrimaryButton onClick={onClick}>
          <FormattedMessage id="jobcard.action.info" defaultMessage="More Information" />
        </PrimaryButton>
      </div>
    </DivCard>
  );
};

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default JobCard;
