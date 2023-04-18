import React from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import { Link } from 'react-router-dom';

const FeaturedJobs = ({ featuredJobs, handleSeeAllJobs, showButton }) => {
  return (
    <section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4">
      <header>
        <h2 className="content-title text-center">Featured Jobs</h2>
      </header>
      <p className="content-description text-center mt-4">Our Featured Jobs section showcases the most promising job openings. Take charge of your future and explore these hand-picked opportunities to find the job that matches your skills and interests today.</p>

      <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
        {
          featuredJobs.map((featuredJob) => <FeaturedJob key={featuredJob.id} featuredJob={featuredJob}></FeaturedJob>)
        }
      </div>
      
      {
        showButton && (
          <div className="text-center">
            <Link onClick={handleSeeAllJobs} className="primary-button-lg">See All Jobs</Link>
          </div>
        )  
      }
      
    </section>
  );
};

export default FeaturedJobs;