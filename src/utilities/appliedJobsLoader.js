import { getStoredJobs } from "./fakeDB";

export const appliedJobsLoader = async () => {
  const featuredJobs = await fetch("/featured-jobs.json");
  const jobs = await featuredJobs.json();

  // Get Applied Jobs from Local Storage
  const storedJobsData = getStoredJobs(); // getting stored job data from local storage
  const savedJobs = []; // empty array to push job data

  for (const id in storedJobsData) {
    const addedJob = jobs.find((featuredJobs) => featuredJobs.id == id); // finding information of the jobs that matches the id of the products in local storage
    if (addedJob) {
      addedJob.quantity = storedJobsData[id];
      savedJobs.push(addedJob);
    }
  }

  return savedJobs;
};