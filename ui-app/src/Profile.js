import React from 'react';
import ResponsiveAppBar from './Components/Headerbar';
import './Styling/UserDashboard.css';
import MyFlights from './Components/UserInformation';



const User = () => {




    return (
        <>
        <ResponsiveAppBar />
        < MyFlights />


        </>
    );
};

export default User;