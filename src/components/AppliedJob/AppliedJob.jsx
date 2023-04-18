import React from 'react';
import { Link } from 'react-router-dom';
import LocationIcon from '../../assets/location-icon.png';
import MoneyIcon from '../../assets/money-icon.png';

const AppliedJob = ({ appliedJobs }) => {
  
  const { id, company_logo, job_title, company_name, work_environment, job_type, location, salary } = appliedJobs;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 p-4 border-gray-200 rounded-lg custom-box-shadow">
      <div className="flex justify-center items-center bg-indigo-50 w-full lg:w-56 h-56 p-4 rounded-lg">
        <img className="image-full object-contain" src={company_logo} alt={company_name} />
      </div>
      <div className="flex flex-col items-center lg:items-start justify-center flex-1 gap-2">
        <header>
          <h3 className="featured-job-title text-center lg:text-left !mt-0">{job_title}</h3>
          <h4 className="featured-job-text text-center lg:text-left mt-1">{company_name}</h4>
        </header>
        <div className="flex gap-4 mt-2">
          <span className="highlighted-text font-extrabold border border-1 border-opacity-60 border-purple-600 px-3 py-1 rounded">{work_environment}</span>
          <span className="highlighted-text font-extrabold border border-1 border-opacity-60 border-purple-600 px-3 py-1 rounded">{job_type}</span>
        </div>
        <div className="flex flex-col items-center lg:flex-row gap-2 lg:gap-12 mt-2">
          <p className="featured-job-text flex gap-2">
            <img src={LocationIcon} alt="Location Icon" />
            {location}
          </p>
          <p className="featured-job-text flex gap-2">
            <img src={MoneyIcon} alt="Money Icon" />
            Salary: {salary}
          </p>
        </div>
      </div>
      <div className="p-4">
        <Link to={`/job/${id}`} className="primary-button-md">View Details</Link>
      </div>
    </div>
  );
};

export default AppliedJob;