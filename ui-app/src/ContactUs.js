import React from 'react';
import CommentBox from './Components/CommentBox';
import './Styling/ContactUs.css'


const ContactUs = () => {



  

  return (
    <>
    <div class="line"></div>
    <p className='contact'>Contact Us</p>
    <p className='message'>
      Got a question, concern, or just want to say hello? We're here to help! Our dedicated customer service team is available to assist you with any inquiries you may have. Simply fill out the form below, and we'll get back to you as soon as possible. 
     Your satisfaction is our top priority, and we're committed to providing you with exceptional service every step of the way.</p>
     <div className='commentbox'>
    <CommentBox />
    </div>
    </>
  );
}
;

export default ContactUs;