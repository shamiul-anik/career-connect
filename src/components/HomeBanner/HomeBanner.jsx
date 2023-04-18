import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BannerImage from '../../assets/man.png';

const Banner = () => {
  
  const checkLocation = useLocation();

  useEffect(() => {
    if (checkLocation.pathname === '/') {
      document.title = 'CareerConnect | Home';
    }
  }, [checkLocation]);

  return (
    <div className="custom-bg">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto pt-4 lg:pt-16">
        <div className="max-w-xl p-4">
          <header>
            <h1 className="banner-title">One Step Closer To Your <span className="highlighted-text">Dream Job</span></h1>
          </header>
          <p className="banner-description mt-4 mb-10 lg:mb-12">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <Link to="/" className="primary-button-lg">Get Started</Link>
        </div>
        <div className="p-4 pb-0">
          <img className="image-full" src={BannerImage} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;