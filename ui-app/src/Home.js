import React from 'react';
import ResponsiveAppBar from './Components/Headerbar';
import Testimonials from './Components/Testimonials'; 
import Destinations from './Components/Destinations';
import FAQs from './Components/FAQ';
import './Styling/Home.css';
import RocketAnimation from './Rocket';

const Home = () => {
  return (
    <>
      <ResponsiveAppBar />
      <div className="homepage-content">
        <div className="button-container">
          <div className="purple-box">
            <Testimonials /> 
          </div>
          <div className="purple-box">
            <Destinations />
          </div>
          <div className="purple-box">
            <FAQs />
          </div>
          <RocketAnimation />
        </div>
      </div>
    </>
  );
};

export default Home;
