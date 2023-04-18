import React from 'react';
import Lottie from "lottie-react";
import LoadingAnimation from '../../lottie/loading.json';

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100dvh-631px)] mb-12">
      <Lottie className="max-w-4xl" animationData={LoadingAnimation} loop={true} />
    </div>
  );
};

export default Loading;