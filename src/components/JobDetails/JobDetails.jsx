import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CommonBanner from '../CommonBanner/CommonBanner';
import Address from '../../assets/job-details/address.png'
import Mail from '../../assets/job-details/mail.png'
import Phone from '../../assets/job-details/phone.png'
import Salary from '../../assets/job-details/salary.png'
import JobTitle from '../../assets/job-details/title.png'
import { addToDB, getStoredJobs } from '../../utilities/fakeDB';
import { toast } from 'react-toastify';

const JobDetails = () => {

	const getFeaturedJobs = useLoaderData();
	const jobID = useParams();

	const [featuredJobs, setFeaturedJobs] = useState(getFeaturedJobs);

	// console.log(featuredJobs);

	const findJobDetails = featuredJobs.find((job) => job.id == jobID.id);

	// console.log(findJobDetails);

	const [jobDetails, setJobDetails] = useState(findJobDetails);

	const { id, job_title, location, salary, job_description, job_responsibilities, educational_requirements, experiences, contact_information } = jobDetails;
	// const { id, company_logo, job_title, company_name, work_environment, job_type, location, salary, job_description, job_responsibilities, educational_requirements, experiences, contact_information } = jobDetails;

	const [storedJobs, setStoredJobs] = useState([]);

	// Get Applied Jobs from Local Storage
	useEffect(() => {
		
		const storedJobsData = getStoredJobs(); // getting stored product's id from local storage
		const savedJobs = []; // empty array to push job data

		// Looping through all the id's of stored/applied jobs data to get the related job information from the API/JSON file.
		for (const id in storedJobsData) {
			const addedJob = featuredJobs.find((featuredJobs) => featuredJobs.id == id); // finding information of the jobs that matches the id of the products in local storage

			if (addedJob) {
				const quantity = storedJobsData[id]; 
				addedJob.quantity = quantity;
				savedJobs.push(addedJob);
			}
		}
		setStoredJobs(savedJobs);

	}, [featuredJobs]); // adding Featured Jobs as dependency


	const handleApplyJob = (jobDetails) => {
		toast.dismiss(); // dismiss previous toast
		let applyJob = [];
		const exists = storedJobs.find((storedJob) => storedJob.id == jobDetails.id); // checking if the added job already exists
		if (!exists) {
			jobDetails.quantity = 1; 
			applyJob = [...storedJobs, jobDetails]; 
			toast.success('Successfully applied for this job!'); // Showing toast
		}
		else {
			toast.error('Already applied for this job!'); // Showing toast
			const remaining = storedJobs.filter((storedJob) => storedJob.id != jobDetails.id);
			applyJob = [...remaining, exists];
		}
		setStoredJobs(applyJob); // set stored jobs
		addToDB(jobDetails.id); // adding jobs information to local storage
	};

	return (
		<div className="min-h-[calc(100dvh-611px)]">

			<CommonBanner></CommonBanner>

			<section className="max-w-7xl mx-auto grid lg:grid-cols-10 gap-4 lg:gap-16 p-4 mt-8 lg:mt-28">
				{/* Left Side Contents Starts Here */}
				<div className="lg:col-span-6">

					{/* Job Description */}
					<div>
						<header>
							<h4 className="sub-title underline !decoration-2 underline-offset-4">Job Description:</h4>
						</header>
						<p className="sub-title-description">{job_description}</p>
					</div>

					{/* Job Responsibilities */}
					<div className="mt-3 lg:mt-6">
						<header>
							<h4 className="sub-title underline !decoration-2 underline-offset-4">Job Responsibilities:</h4>
						</header>
						<ul className="sub-title-description list-disc list-inside">
							{job_responsibilities.map((responsibility, index) => <li key={index}>{responsibility}</li>)}
						</ul>
					</div>

					{/* Educational Requirements */}
					<div className="mt-3 lg:mt-6">
						<header>
							<h4 className="sub-title underline !decoration-2 underline-offset-4">Educational Requirements:</h4>
						</header>
						<p className="sub-title-description">{educational_requirements}</p>
					</div>

					{/* Experiences */}
					<div className="mt-3 lg:mt-6">
						<header>
							<h4 className="sub-title underline !decoration-2 underline-offset-4">Experiences:</h4>
						</header>
						<p className="sub-title-description">{experiences}</p>
					</div>

				</div>


				{/* Right Side Contents Starts Here */}
				<div className="lg:col-span-4">
					<div className="custom-bg p-6 lg:p-7 rounded-lg box-shadow-custom">
						{/* Job Details */}
						<div>
							<header>
								<h4 className="sub-title !decoration-none">Job Details</h4>
								<div className="divider mt-1 mb-3"></div>
							</header>
							<div className="flex flex-col gap-2">
								{/* Salary */}
								<div className="flex gap-2 items-center">
									<img className="h-5 w-5" src={Salary} alt="Salary" />
									<h5 className="sub-title-description">
										<span className="!font-extrabold">Salary: </span> {salary} (Per Month)
									</h5>
								</div>

								{/* Job Title */}
								<div className="flex gap-2 items-center">
									<img className="h-5 w-5" src={JobTitle} alt="Job Title" />
									<h5 className="sub-title-description">
										<span className="!font-extrabold">Job Title: </span> {job_title}
									</h5>
								</div>
							</div>
						</div>

						{/* Contact Information */}
						<div className="mt-8">
							<header>
								<h4 className="sub-title !decoration-none">Contact Information</h4>
								<div className="divider mt-1 mb-3"></div>
							</header>
							<div className="flex flex-col gap-2">
								{/* Phone */}
								<div className="flex gap-2 items-center">
									<img className="h-5 w-5" src={Phone} alt="Phone" />
									<h5 className="sub-title-description">
										<span className="!font-extrabold">Phone: </span> {contact_information[0].phone}
									</h5>
								</div>

								{/* Email */}
								<div className="flex gap-2 items-center">
									<img className="h-5 w-5" src={Mail} alt="Email" />
									<h5 className="sub-title-description">
										<span className="!font-extrabold">Email: </span> {contact_information[0].email}
									</h5>
								</div>

								{/* Address */}
								<div className="flex gap-2 items-center">
									<img className="h-5 w-5" src={Address} alt="Address" />
									<h5 className="sub-title-description">
										<span className="!font-extrabold">Address: </span> {location}
									</h5>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-6 flex justify-center items-center text-center">
						<button className="primary-button-lg flex-1" onClick={() => handleApplyJob(jobDetails)}>Apply Now</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default JobDetails;