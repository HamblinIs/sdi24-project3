import React, { useState, useEffect } from 'react';

const PurchaseTicket = () => {
  //need to get clicked flight from TicketPage
    
  const [searchTerms, setSearchTerms] = useState({
    destination: '',
    date_time: '',
    seller: ''
  })

  const [destination, setDestination] = useState("")
  const [dateTime, setDateTime] = useState("")
  const [seller, setSeller] = useState("")

  const [clickedTicket, setClickedTicket] = useState()
  const [allFlights, setAllFlights] = useState([])

  //useEffect(() => {
  //    fetch('localhost:8080/data/launch')
  //    .then(res => res.json())
  //    .then(data => setAllFlights(data))
  //    
  //}, [])
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

  console.log(allFlights)

  if (allFlights.length() == 0) {
      console.log('Page Still Loading')
  }


  function handleClick(event) {
      event.preventDefault();
      let flight = document.getElementById('//flight').value

  }


  function handleSumbit(event) {
    event.preventDefault
    setSearchTerms({})
  }

  return (
      <>
        <form> {/* Search Form */}
          <label>Destination
              <input onChange={(e) => setSearchTerms({...searchTerms, destination: e.target.value})} value={searchTerms.destination} type ='text' name='destination' id='destination'></input>
          </label>
          <label>Departure Time
              <input onChange={(e) => setSearchTerms({...searchTerms, date_time: e.target.value})} value={searchTerms.date_time} type='text' name='date_time' id='date_time'></input>
          </label>
          <label>Seller
              <input onChange={(e) => setSearchTerms({...searchTerms, seller: e.target.value})} value={searchTerms.seller} type='text' name='seller' id='seller'></input>
          </label>
        </form>

        {/* {
            Make container for all of the flights
            Make card for individual flight
            Return click event and link to page displaying detailed flight info 
        } */}

        <div>{/* {main page container} */}
          {if (searchTerms.length == 0) {

            {allFlights.map((allFlights, index) => {
              return (
                <div>{/* {main page container} */}
                  <div>{/* {main page container} */}
                    {allFlights.id}
                  </div>
                  <div>{/* {main page container} */}
                    {allFlights.destination}
                  </div>
                  <div>{/* {main page container} */}
                    {allFlights.distance_from_earth}
                  </div>
                  <div>{/* {main page container} */}
                    {allFlights.date_time}
                  </div>
                  <div>{/* {main page container} */}
                    {allFlights.is_available}
                  </div>
                  <div>{/* {main page container} */}
                    {allFlights.seller}
                  </div>
                </div>
              )})}
          }}
          {/* reload and display filtered search terms here */}

        </div>
      </>
      )
  
  return (
    <form>
      <label></label>
    </form>
    
  )


};

export default Flights;