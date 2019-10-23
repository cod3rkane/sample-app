const jobList = [
  {
    id: 1,
    title: 'Frontend Developer',
    description: 'Comfortable with modern JS stack, experience with React.',
    employment_type: 'full_time',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    description: 'Comfortable with modern JS stack, experience with React.',
    employment_type: 'full_time',
  },
  {
    id: 3,
    title: 'Frontend Developer',
    description: 'Comfortable with modern JS stack, experience with React.',
    employment_type: 'full_time',
  },
  {
    id: 4,
    title: 'Frontend Developer',
    description: 'Comfortable with modern JS stack, experience with React.',
    employment_type: 'full_time',
  },
  {
    id: 5,
    title: 'Frontend Developer',
    description: 'Comfortable with modern JS stack, experience with React.',
    employment_type: 'full_time',
  },
  {
    id: 6,
    title: 'Frontend Developer',
    description: 'Comfortable with modern JS stack, experience with React.',
    employment_type: 'full_time',
  },
  {
    id: 7,
    title: 'Frontend Developer',
    description: 'Comfortable with modern JS stack, experience with React.',
    employment_type: 'full_time',
  },
];

function getList(req, res) {
  res.status(200).json(jobList);
}

module.exports = {
  jobList,
  getList,
};
