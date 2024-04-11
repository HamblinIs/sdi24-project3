import React from 'react';
import './Styling/UserHeader.css';


const MyFlights = (props) => {
    const { each } = props
    const { total, text, color } = each
    const colorText = {
        color: `${color}`
    }
    return (
        <div className='d-flex flex-column align-items-center shadow flight-container'>
            <p className='fs-2' style={colorText}>{total} </p>
            <p>{text} </p>
        </div>
    )
}

export default MyFlights;