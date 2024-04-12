import React from 'react';
import './Rocket.css'; 

const RocketAnimation = () => {
  return (
    <div className="rocket">
      <div className="rocket-body">
        <div className="body"></div>
        <div className="fin fin-left"></div>
        <div className="fin fin-right"></div>
        <div className="window"></div>
      </div>
      <div className="exhaust-flame"></div>
      <ul className="exhaust-fumes">
        {Array.from({ length: 9 }).map((_, index) => (
          <li key={index}></li>
        ))}
      </ul>
      <ul className="star">
        {Array.from({ length: 7 }).map((_, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </div>
  );
};

export default RocketAnimation;
