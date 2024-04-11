import React, { useState } from 'react';
import '../Styling/Destination.css';

const Destinations = () => {
    const [isOpen, setIsOpen] = useState(false);

    const destinations = [
        {
            id: 1,
            planet: 'Mars',
            description: 'Visit the red planet and explore its rugged terrain. Take a tour of Olympus Mons, the tallest volcano in the solar system. Experience Martian gravity and breathtaking views of the vast Martian landscape.',
            attractions: ['Olympus Mons', 'Valles Marineris', 'Curiosity Rover Site']
        },
        {
            id: 2,
            planet: 'Jupiter',
            description: 'Discover the gas giant Jupiter and its mesmerizing cloud bands. Witness the Great Red Spot, a massive storm larger than Earth. Experience the intense magnetic field and stunning auroras.',
            attractions: ['Great Red Spot', 'Jupiter\'s Moons', 'Galilean Satellites']
        },
        {
            id: 3,
            planet: 'Saturn',
            description: 'Explore the majestic rings of Saturn and marvel at their beauty. Visit Saturn\'s largest moon, Titan, with its thick atmosphere and methane lakes. Witness the dazzling display of Saturn\'s auroras.',
            attractions: ['Saturn\'s Rings', 'Titan', 'Saturn\'s Hexagon']
        }
    ];

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="destinations">
            <h2>Exciting Destinations</h2>
            <button className="toggle-button" onClick={toggleOpen}>{isOpen ? 'Hide Destinations' : 'Show Destinations'}</button>
            {isOpen && (
                <div className="content">
                    {destinations.map(destination => (
                        <div key={destination.id} className="destination">
                            <h3>{destination.planet}</h3>
                            <p>{destination.description}</p>
                            <ul>
                                {destination.attractions.map(attraction => (
                                    <li key={attraction}>{attraction}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Destinations;
