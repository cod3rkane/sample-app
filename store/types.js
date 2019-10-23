import PropTypes from 'prop-types';

const JobPropType = PropTypes.shape({
  list: PropTypes.array.isRequired,
  error: PropTypes.any,
}).isRequired;

export default {
  JobPropType,
};
