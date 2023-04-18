import React, { useEffect, useState } from 'react';
import TopRightVector from '../../assets/vector-top-right.png'
import BottomLeftVector from '../../assets/vector-bottom-left.png'
import { useLocation } from 'react-router-dom';

const CommonBanner = () => {

  const [title, setTitle] = useState("");
  const checkLocation = useLocation();

  const jobText = checkLocation.pathname.match(/job/g);

  useEffect(() => {
    if (checkLocation.pathname === '/statistics') {
      document.title = 'CareerConnect | Statistics';
      setTitle("Statistics");
    } 
    else if (checkLocation.pathname === '/blog') {
      document.title = 'CareerConnect | Blog';
      setTitle("Blog");
    } 
    else if (checkLocation.pathname === '/applied-jobs') {
      document.title = 'CareerConnect | Applied Jobs';
      setTitle("Applied Jobs");
    }
    else if (jobText[0] === 'job') {
      document.title = 'CareerConnect | Job Details';
      setTitle("Job Details");
    }
    else if (checkLocation.pathname === '/') {
      document.title = 'CareerConnect | Home';
      setTitle("Home");
    }
  }, [checkLocation]);


  return (
    <div className="relative custom-bg h-72 flex justify-center items-center">
      <img className="absolute top-[-125px] lg:top-[-104px] right-0" src={TopRightVector} alt="Top Right Vector" />
      <h3 className="page-title">{title}</h3>
      <img className="absolute left-[-250px] lg:left-0 bottom-0" src={BottomLeftVector} alt="Top Right Vector" />
    </div>
  );
};

export default CommonBanner;