import React from 'react';
import ResponsiveAppBar from './Components/Headerbar';
import './Styling/Profile.css';
import './Components/UpcomingFlight';
import CommentBox from './Components/CommentBox';
import  './Components/PastFlight';
import UpcomingLaunch from './Components/UpcomingFlight';
import PastLaunch from './Components/PastFlight';

const Profile = () => {




    return (
        <>

        <ResponsiveAppBar />
        <p className='greeting'> WELCOME BACK! YOUR GALACTIC TRAVEL INFORMATION IS UP TO DATE.</p>
        <body class="Profile">
        <div className='box'>
            <UpcomingLaunch />
            </div>
            <div className='box'>
                <PastLaunch />
            </div>
        <p className='accounthelp'>Having a problem with your account? Send our team a message!</p>
        <div className='accountmessage'>
        <CommentBox />
        </div>
        </body>
        </>
    );
};

export default Profile;