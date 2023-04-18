import React from 'react';
import CommonBanner from '../CommonBanner/CommonBanner';
import ReactBanner from '../../assets/react-banner.png';

const Blog = () => {
  return (
    <div className="min-h-[calc(100dvh-611px)]">

      <CommonBanner></CommonBanner>
      
      
      
      <div className="max-w-7xl mx-auto mt-12 lg:mt-20 p-4">
        
        <header>
          <h2 className="content-title text-center">React Q&A Blog</h2>
        </header>

        <div className="p-4 lg:p-8 rounded-lg box-shadow-custom mt-6">
          {/* React Banner */}
          <div className="question-img">
            <img src={ReactBanner} alt="Q&amp;A Banner" />
          </div>

          {/* Question-1 */}
          <div>
            <header className="question-text">
              <h3>1. When should you use Context API?</h3>
            </header>
            <p className="answer-container">
              <span className="answer">Answer:</span><br />
              <span className="font-bold">Context API</span> in React is used to share data between components that are not directly connected. It helps avoiding prop drilling and provides a way to create a global state that can be accessed and modified by any component in the app, making it easier to manage the state and reduce the amount of code needed to pass data between components. <br /><br />
              So, <span className="font-bold">Context API</span> in React should be used when it's necessary to share data between components that are not directly connected in the component tree. Another use case for <span className="font-bold">Context API</span> is to avoid prop drilling for passing props through multiple levels of components.
            </p>
          </div>
          
          {/* Question-2 */}
          <div>
            <header className="question-text">
              <h3>2. What is a custom hook?</h3>
            </header>
            <p className="answer-container">
              <span className="answer">Answer:</span><br />
              A <span className="font-bold">custom hook</span> is a way to reuse code in React. It's a function that lets the user to use stateful logic, such as keeping track of data or making API calls, across different components. This can be helpful to write less code and keep things organized. A <span className="font-bold">custom hook</span> can be created by writing a function that uses hooks like useState or useEffect, and then it can be used in any component that needs it. <br /> <br /> 
              <span className="font-bold">Custom hooks </span>can be a powerful tool for building scalable and reusable code in React applications.
            </p>
          </div>
          
          {/* Question-3 */}
          <div>
            <header className="question-text">
              <h3>3. What is useRef?</h3>
            </header>
            <p className="answer-container">
              <span className="answer">Answer:</span><br />
              <span className="font-bold">useRef</span> is a React hook that allows it's user to create a reference to a DOM element or variable that persists across re-renders. It's used to access the value of an input field, set focus to an element, or store mutable values that need to persist. A ref object can be created with <span className="font-bold">useRef</span> and attach it to an element or variable. Then the current value of the ref can be accessed with ref.current. <br /><br />
              <span className="font-bold">useRef</span> is a powerful tool for manipulating the DOM and persisting values in React components, and it can be a useful alternative to using state for certain use cases.
            </p>
          </div>
          
          {/* Question-4 */}
          <div>
            <header className="question-text">
              <h3>4. What is useMemo?</h3>
            </header>
            <p className="answer-container">
              <span className="answer">Answer:</span><br />
              <span className="font-bold">useMemo</span> is a React hook that improves the performance of React application by caching the result of a function and only recalculating it when necessary. User pass in a function and an array of dependencies, and <span className="font-bold">useMemo</span> will recompute the result only if the dependencies change.  <br /><br />
              <span className="font-bold">useMemo</span> can be a powerful tool for optimizing the performance of React applications by reducing unnecessary re-renders and avoiding computationally expensive operations.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Blog;