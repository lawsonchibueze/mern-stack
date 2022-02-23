const createJob = async (req, res) => {
  await res.send('Create Job');
};
const getAllJobs = async (req, res) => {
  await res.send('get all jobs');
};
const updateJob = async (req, res) => {
  await res.send('update Job');
};
const deleteJob = async (req, res) => {
  await res.send('delete Job');
};
const showStats = async (req, res) => {
  await res.send('Show Stats');
};
export { createJob, deleteJob, getAllJobs, updateJob, showStats };
