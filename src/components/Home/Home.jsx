import React, { useEffect, useState } from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { toast } from 'react-toastify';


const Home = () => {
  const allFeaturedJobs = useLoaderData(); // getting allFeaturedJobs data from loader

  // Categories Data State
  const [categories, setCategories] = useState([]);
  
  // Featured Jobs Data State
  const [featuredJobs, setFeaturedJobs] = useState(allFeaturedJobs.slice(0, 4));

  // See All Jobs Button Show/Hide State
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    fetch("/categories.json").
    then(res => res.json()).
    then(data => setCategories(data))
  }, [])


  // See All Jobs Button Handler
  const handleSeeAllJobs = () => {
    toast.dismiss(); // dismiss previous toast
    setFeaturedJobs(allFeaturedJobs); // set to show all the featured jobs
    setShowButton(false); // set to hide See All Jobs button when all the featured jobs are shown
    toast.success('All Featured Jobs are visible!'); // Showing toast
  };

  return (
    <div>
      <HomeBanner></HomeBanner>

      <Categories categories={categories}></Categories>

      <FeaturedJobs featuredJobs={featuredJobs} handleSeeAllJobs={handleSeeAllJobs} showButton={showButton}></FeaturedJobs>

    </div>
  );
};

export default Home;