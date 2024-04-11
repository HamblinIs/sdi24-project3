import React from 'react';
import ResponsiveAppBar from './Components/Headerbar';
import Testimonials from './Components/Testimonials'; 

const Home = () => {
  return (
    <>
      <ResponsiveAppBar />
      <div className="homepage-content">
        
        <Testimonials /> {/* Include the Testimonials component */}
      </div>
    </>
  );
};

export default Home;
