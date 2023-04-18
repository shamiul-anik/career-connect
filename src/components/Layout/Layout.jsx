import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
// import Loading from '../Loading/Loading';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {

  // const navigation = useNavigation();
 
  return (
    <div>
      <div className="custom-bg pt-6">
        <Header></Header>
      </div>

      {/* {navigation.state == "loading" ? <Loading></Loading> : <Outlet></Outlet>} */}

      <Outlet></Outlet>

      <Footer></Footer>

      {/* React Toastify */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
    </div>
  );
};

export default Layout;