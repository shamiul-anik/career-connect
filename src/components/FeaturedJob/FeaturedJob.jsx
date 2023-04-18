import React from 'react';
import { Link } from 'react-router-dom';
import LocationIcon from '../../assets/location-icon.png';
import MoneyIcon from '../../assets/money-icon.png';

const FeaturedJob = ({ featuredJob }) => {
  // console.log(featuredJob);
  const { id, company_logo, job_title, company_name, work_environment, job_type, location, salary } = featuredJob;
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-4 lg:p-10 border-gray-200 rounded-lg custom-box-shadow">
      <div className="p-4 rounded-lg">
        <img src={company_logo} alt={company_name} />
      </div>
      <header>
        <h3 className="featured-job-title mt-4">{job_title}</h3>
        <h4 className="featured-job-text text-center mt-2">{company_name}</h4>
      </header>
      <div className="flex gap-4 mt-2">
        <span className="highlighted-text font-extrabold border border-1 border-opacity-60 border-purple-600 px-3 py-1 rounded">{work_environment}</span>
        <span className="highlighted-text font-extrabold border border-1 border-opacity-60 border-purple-600 px-3 py-1 rounded">{job_type}</span>
      </div>
      <div className="flex flex-col items-center lg:flex-row gap-2 lg:gap-12 justify-between mt-2 mb-6">
        <p className="featured-job-text flex gap-2">
          <img src={LocationIcon} alt="Location Icon" /> 
          {location}
        </p>
        <p className="featured-job-text flex gap-2">
          <img src={MoneyIcon} alt="Money Icon" />
          {salary}
        </p>
      </div>
      <div className="mb-6 lg:mb-0">
        <Link to={`/job/${id}`} className="primary-button-md">View Details</Link>
      </div>
    </div>
  );
};

export default FeaturedJob;