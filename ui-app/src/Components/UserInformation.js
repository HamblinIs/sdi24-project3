import React from 'react';
import '../Styling/UserHeader.css';

const UserInformation = () => {
  return (
    <div className="circle-container">
      <div className="circle">
        <p className='flights'>Upcoming Flights</p>
      </div>
      <div className="circle">
        <p className='flights'>Previous Flights</p>
      </div>
    </div>
  );
}

export default UserInformation;



