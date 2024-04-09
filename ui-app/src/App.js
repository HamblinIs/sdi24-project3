import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './HomePage.js'; 
// import AboutUs from './AboutUs'; //
import ContactUs from './ContactUs';

import './App.css';

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            {/* <Route path={'/AboutUs'} element={<AboutUs />} /> */} {/* Uncomment this line if you want to use the AboutUs component */}
            <Route path={'/ContactUs'} element={<ContactUs />} />
            <Route path={'/HomePage'} element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
