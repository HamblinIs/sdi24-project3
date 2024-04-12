import React, { useState, useEffect } from 'react';
import '../Styling/PastFlight.css';

    function PastLaunch() {
        const [launch, setLaunch] = useState(null);
        const [userId, setUserId] = useState('');
    
        useEffect(() => {
            // Fetch user ID from session or authentication context
            const loggedInUserId = sessionStorage.getItem('userId');
            if (loggedInUserId) {
                setUserId(loggedInUserId); 
                fetchPastLaunch(loggedInUserId); 
            }
        }, []);
    
        const fetchPastLaunch = async (userId) => {
            try {
                const response = await fetch(`https://localhost:8080/data/past_launches_by_user_id/${userId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch past launch');
                }
    
                const launchData = await response.json();
                setLaunch(launchData);
                console.log("Past Launch:", launchData);
            } catch (error) {
                console.error('Error fetching past launch:', error.message);
            }
        };
    
        return (
            <div>
                {!userId && (
                    <p>Please log in to view past launches.</p>
                )}
    
                {userId && (
                    <>
                        <button onClick={() => fetchPastLaunch(userId)} className="past-launch-button">Show Past Launch</button>
    
                        {launch && (
                            <div>
                                <p>Name: {launch.launch_destination}</p>
                                <p>Date: {launch.launch_date_time}</p>
                               
                            </div>
                        )}
                    </>
                )}
            </div>
        );
    }
    
    export default PastLaunch;
    
