
import React from 'react'
// import Home from './components/pages/Home'
// import ContactUs from './components/pages/ContactUs'

import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './Register';
import Login from './Login';

function App() {
  return (
    <Router>
    {/* <Link to={'/register'}>Register Here</Link> */}
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={ <Register/>}></Route>
      {/* <Route path={'/ContactUs'} component={ContactUs}></Route> */}
    </Routes>
  </Router>
    // <div className="App">

  );
}

export default App;