import React, { useEffect, useState } from 'react';
import CommonBanner from '../CommonBanner/CommonBanner';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {

  const getAppliedJobs = useLoaderData();

  const [getAllAppliedJobs, setGetAllAppliedJobs] = useState(getAppliedJobs);
  const [appliedJobs, setAppliedJobs] = useState(getAllAppliedJobs);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    setAppliedJobs(appliedJobs);
  }, [appliedJobs])

  const handleSelectChange = (event) => {
    const optionValue = event.target.value;
    const filteredJobs = getAllAppliedJobs.filter((appliedJobs) => appliedJobs.work_environment === optionValue);
    if (filteredJobs) {
      setAppliedJobs(filteredJobs);
    }
  };

  return (
    <div className="min-h-[calc(100dvh-611px)]">

      <CommonBanner></CommonBanner>

      {
        (getAllAppliedJobs.length == 0) ? (
          <section className="max-w-7xl mx-auto mt-12 lg:mt-24 p-4">
            <h1 className="text-3xl font-extrabold text-center text-red-600">You haven't applied for any job yet!</h1>
          </section>
        ) : 
        (
          <section className="max-w-7xl mx-auto mt-12 lg:mt-24 p-4">

            <div className="flex justify-end">
              <select className="select select-primary w-40" value={selectedValue} onChange={handleSelectChange}>
                <option disabled value="">Filter By</option>
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
              </select>
            </div>

              {(appliedJobs.length != 0) ? 
                <div className="grid gap-5 lg:gap-6 mt-8 mb-12">
                  {
                    appliedJobs.map((appliedJobs) => <AppliedJob key={appliedJobs.id} appliedJobs={appliedJobs}></AppliedJob>)
                  }
                </div> :
                <h1 className="text-3xl font-extrabold text-center text-red-600 mt-16">You haven't applied for any job with selected work environment!</h1>
            }
            
          </section>
        )
      }
      

    </div>
  );
};

export default AppliedJobs;