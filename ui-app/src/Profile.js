import React from 'react';
import ResponsiveAppBar from './Components/Headerbar';
import './Styling/Profile.css';

import UserInformation from './Components/UserInformation';
import CommentBox from './Components/CommentBox';


const Profile = () => {




    return (
        <>
        <ResponsiveAppBar />
        <p className='greeting'> WELCOME BACK! YOUR GALACTIC TRAVEL INFORMATION IS UP TO DATE.</p>
        < UserInformation />
        <p className='accounthelp'>Having a problem with your account? Send our team a message!</p>
        <div className='accountmessage'>
        <CommentBox />
        </div>
        </>
    );
};

export default Profile;