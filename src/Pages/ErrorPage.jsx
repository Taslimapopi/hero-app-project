import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import errorimg from '../assets/error-404.png'
import { useNavigate } from 'react-router';


const ErrorPage = () => {
  const navigate = useNavigate();
    return (
        <div className="flex flex-col min-h-screen">
      <NavBar></NavBar>

      <div className="flex-1 max-w-screen-xl px-4 md:px-8 mx-auto py-4 md:py-8">
        <img src={errorimg} alt="" />
        <h1 className='text-center text-2xl font-bold'>Oops, page not found!</h1>
        <p className='text-center'>The page you are looking for is not available.</p>
        <div className='text-center mt-5'>
          <button onClick={() => navigate(-1)} className='btn btn-primary px-5  text-white'>Go Back</button>
        </div>
        

      </div>


      <Footer></Footer>
    </div>
    );
};

export default ErrorPage;