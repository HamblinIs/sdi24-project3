import React from 'react';
import '../Styling/UserHeader.css';

const UserInformation = () => {
  return (
    <div className="circle-container">
      <div className="circle">
        <p>Total Flights Taken</p>
      </div>
      <div className="circle">
        <p>Upcoming Flight Information</p>
      </div>
      <div className="circle">
        <p>Previous Flight Information</p>
      </div>
    </div>
  );
}

export default UserInformation;



