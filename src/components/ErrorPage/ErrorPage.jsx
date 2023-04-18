import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import PageNotFound from '../../lottie/page-not-found-404.json';

const ErrorPage = () => {

  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex flex-col justify-center items-center h-[100dvh]">
      <Lottie className="max-w-4xl" animationData={PageNotFound} loop={true} />
      {/* <h1 className="text-3xl font-bold mb-2">404</h1>
      <p className="text-2xl font-medium mb-2">Sorry, an unexpected error has occurred.</p> */}
      <p className="text-xl">
        {/* <i className="text-red-600">{error?.status}</i> */}
        <i className="text-red-600">{error?.data}</i>
        <i className="text-red-600">{error?.message}</i>
      </p>
      <div className="mt-12">
        <Link to="/" className="primary-button-md">Back to Main</Link>
      </div>
    </div>
  );
};

export default ErrorPage;