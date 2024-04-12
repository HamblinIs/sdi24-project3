import React, { useState, useEffect } from 'react';

function UpcomingLaunch() {
    const [launch, setLaunch] = useState(null);
    const [userId, setUserId] = useState('');

    useEffect(() => {
        // Fetch user ID from session or authentication context
        const loggedInUserId = sessionStorage.getItem('userId'); 
        if (loggedInUserId) {
            setUserId(loggedInUserId); 
        }
    }, []);

    const showLaunch = async () => {
        try {
            const response = await fetch(`https://localhost:8080/data/launches_by_user_id/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch launch');
            }

            const launchData = await response.json();
            setLaunch(launchData);
            console.log("Launch:", launchData);
        } catch (error) {
            console.error('Error fetching launch:', error.message);
        }
    };

    return (
        <div>
            {!userId && (
                <p>Please log in to view upcoming launches.</p>
            )}

            {userId && (
                <>
                    <button onClick={showLaunch} className="upcoming-launch-button">Show Launch</button>

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

export default UpcomingLaunch;
