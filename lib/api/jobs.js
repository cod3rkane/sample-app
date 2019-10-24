import Request from './request';

const GetJobList = () => Request('/api/jobs', {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export default {
  GetJobList,
};
