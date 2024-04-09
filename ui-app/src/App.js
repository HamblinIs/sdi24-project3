
import React from 'react'
import { BrowserRouter as Router,  Switch, Route} from 'react-router-dom'
// import Home from './Home'
// import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

import './App.css';

function App() {
  return (
    <>
    <div>
      <Router>
      
          <Switch>
            {/* <Route path={'/AboutUs'} component={AboutUs}></Route> */}
            <Route path={'/ContactUs'} component={ContactUs}></Route>
            {/* <Route path={'/'} component={Home}></Route> */}
          </Switch>
        
      </Router>
    </div>
    </>
  );
}

export default App;
