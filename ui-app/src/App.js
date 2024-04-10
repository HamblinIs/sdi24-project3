import React from 'react';
import Home from './Home.js'; 
import Flights from './PurchaseTickets.js'; //
import ContactUs from './ContactUs';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './Register';
import Login from './Login';

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            {/* <Route path={'/AboutUs'} element={<AboutUs />} /> */} {/* Uncomment this line if you want to use the AboutUs component */}
            <Route path={'/ContactUs'} element={<ContactUs />} />
            <Route path={'/Home'} element={<Home />} />
            <Route path={'/PurchaseTickets'} element={<Flights />} />
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={ <Register/>}></Route>

          </Routes>
        </Router>
      </div>
    </>
   
  );
}

export default App;