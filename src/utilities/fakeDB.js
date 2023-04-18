// use local storage to manage cart data
const addToDB = (id) => {

  // Get the stored jobs from local storage
  let storedJobs = getStoredJobs(); // getting stored job data from local storage
  let quantity = storedJobs[id];
  if (!quantity) {
    storedJobs[id] = 1;
  } 
  localStorage.setItem("stored-jobs", JSON.stringify(storedJobs));
};

const getStoredJobs = () => {
  let appliedJobs = {};

  // Get the stored jobs from local storage
  const storedJobs = localStorage.getItem("stored-jobs");
  if (storedJobs) {
    appliedJobs = JSON.parse(storedJobs);
  }
  return appliedJobs;
};


export { addToDB, getStoredJobs };
