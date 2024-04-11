import React, { useState, useEffect } from 'react';
import "./PurchaseTickets.css"

const PurchaseTicket = () => {
  //To-Do:
  //Fetch call to clicked price on specific flight
  //Make fields have a dropdown with destination names 

  const [allFlights, setAllFlights] = useState([])
  const [searchTerms, setSearchTerms] = useState({
    destination: '',
    date_time: '',
    seller: ''
  })
  
  const [filteredFlights, setFilteredFlights] = useState([])

  //apparently used for the form input fields


  const [clickedTicket, setClickedTicket] = useState()


  //useEffect(() => {
  //    fetch('localhost:8080/data/launch')
  //    .then(res => res.json())
  //    .then(data => setAllFlights(data))
  //    
  //}, [])

  useEffect(() => {
    setAllFlights([{'id': 0, 'destination': 'Europa', 'distance_from_earth': 483889580, 'is_available': true, 'date_time': '2038-6-6 3:54:24', 'seller': 'StarVoyage Enterprises'},
      {'id': 1, 'destination': 'New Tijuana', 'distance_from_earth': 461916511, 'is_available': false, 'date_time': '2038-5-27 11:37:39', 'seller': 'Celestial Journeys Co.'},
      {'id': 2, 'destination': 'New Tijuana', 'distance_from_earth': 211516361, 'is_available': false, 'date_time': '2038-10-22 3:44:26', 'seller': 'Cosmic Wanderlust Ventures'},
      {'id': 3, 'destination': 'Nibiru', 'distance_from_earth': 705157990, 'is_available': false, 'date_time': '2038-2-9 3:35:56', 'seller': 'GalaxyBound Expeditions'},
      {'id': 4, 'destination': 'Venus', 'distance_from_earth': 491064127, 'is_available': true, 'date_time': '2038-5-24 8:34:59', 'seller': 'GalaxyBound Expeditions'},
      {'id': 5, 'destination': 'New Tijuana', 'distance_from_earth': 993840132, 'is_available': false, 'date_time': '2038-8-26 8:30:35', 'seller': 'Celestial Journeys Co.'},
      {'id': 6, 'destination': 'Europa', 'distance_from_earth': 985990484, 'is_available': true, 'date_time': '2038-6-2 3:16:29', 'seller': 'Interstellar Odyssey Group'},
      {'id': 7, 'destination': 'Venus', 'distance_from_earth': 213842165, 'is_available': false, 'date_time': '2038-5-13 7:01:54', 'seller': 'Interstellar Odyssey Group'},
      {'id': 8, 'destination': 'Europa', 'distance_from_earth': 725391907, 'is_available': false, 'date_time': '2038-3-7 5:47:03', 'seller': 'GalaxyBound Expeditions'},
      {'id': 9, 'destination': 'Nibiru', 'distance_from_earth': 634020610, 'is_available': false, 'date_time': '2038-3-2 7:17:05', 'seller': 'Interstellar Odyssey Group'}])
  }, [filteredFlights])


  if (allFlights.length == 0) {
      console.log('Page Still Loading')
  }


  //function handleClick(event) {
  //    event.preventDefault();
  //    let flight = document.getElementById('//flight').value
  //
  //}

  function filterAllFlights() {
    let newFlightList = [];
    
    for (let i = 0; i < allFlights.length; i++) {
      if ((searchTerms.destination === allFlights[i].destination) || (searchTerms.date_Time === allFlights[i].date_time) || (searchTerms.seller === allFlights[i].seller)) {
        console.log(searchTerms.dateTime == allFlights[i].dateTime)
        newFlightList.push(allFlights[i]);
      }}
    setFilteredFlights(newFlightList);
    console.log(newFlightList)
  }

  function handleSumbit(event) {
    event.preventDefault();
    filterAllFlights()
  }

  return (
      <div>
        <div>
          <form class="searchForm" onSubmit ={handleSumbit}> {/* Search Form */}
            <label>Destination
                <input onChange={(e) => setSearchTerms({...searchTerms, destination: e.target.value})} value={searchTerms.destination} type ='text' name='destination' id='destination'></input>
            </label>
            <label>Departure Time
                <input onChange={(e) => setSearchTerms({...searchTerms, date_time: e.target.value})} value={searchTerms.date_time} type='text' name='date_time' id='date_time'></input>
            </label>
            <label>Seller
                <input onChange={(e) => setSearchTerms({...searchTerms, seller: e.target.value})} value={searchTerms.seller} type='text' name='seller' id='seller'></input>
            </label>
            <input type='submit' onSubmit={handleSumbit}/>
          </form>
        </div>
        
        {filteredFlights.length > 0 ? (
          <div class="flightsContainer">
            {filteredFlights.map((filteredFlights) => {
              return (
                <div class='individualFlight'>{/* Flight Card Container */}
                  <div class='destinationStyling'>{/*  */}
                    {filteredFlights.destination}
                  </div>
                  <div class='distanceStyling'>{/*  */}
                    {filteredFlights.distance_from_earth}
                  </div>
                  <div class='dateTimeStyling'>
                    {filteredFlights.date_time}
                  </div>
                  <div class='availabilityStyling'>
                    {filteredFlights.is_available}
                  </div>
                  <div class='sellerStyling'>
                    {filteredFlights.seller}
                  </div>
                </div>
              )})}
          </div>
        ) : (
        <div class="flightsContainer">
          {allFlights.map((allFlights) => {
            return (
              <div class='individualFlight'>{/* Flight Card Container */}
                <div class='destinationStyling'>{/*  */}
                  {allFlights.destination}
                </div>
                <div class='distanceStyling'>{/*  */}
                  {allFlights.distance_from_earth}
                </div>
                <div class='dateTimeStyling'>
                  {allFlights.date_time}
                </div>
                <div class='availabilityStyling'>
                  {allFlights.is_available}
                </div>
                <div class='sellerStyling'>
                  {allFlights.seller}
                </div>
              </div>
            )})}
      </div>
        )}
      </div>
      )
};

export default PurchaseTicket;