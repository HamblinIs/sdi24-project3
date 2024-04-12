import React, { useState } from 'react';

function PastLaunch() {
    const [launch, setLaunch] = useState(null);
    const [userId, setUserId] = useState('');

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
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter User ID"
            />
            <button onClick={showLaunch}>Most Recent Past Flight</button>
            {launch && (
                <div>
                    <p>Name: {launch.launch_destination}</p>
                    <p>Date: {launch.launch_date_time}</p>
                  
                </div>
            )}
        </div>
    );
}

export default PastLaunch;
