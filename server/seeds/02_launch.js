
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */




exports.seed = async function(knex) {
  // Deletes ALL existing entries

    await knex('launch').del()
    await knex('launch').insert(
      [{'id': 0, 'destination': 'Europa', 'distance_from_earth': 483889580, 'is_available': true, 'date_time': '2038-6-6 3:54:24', 'seller': 'StarVoyage Enterprises'},
      {'id': 1, 'destination': 'New Tijuana', 'distance_from_earth': 461916511, 'is_available': false, 'date_time': '2038-5-27 11:37:39', 'seller': 'Celestial Journeys Co.'},
      {'id': 2, 'destination': 'New Tijuana', 'distance_from_earth': 211516361, 'is_available': false, 'date_time': '2038-10-22 3:44:26', 'seller': 'Cosmic Wanderlust Ventures'},
      {'id': 3, 'destination': 'Nibiru', 'distance_from_earth': 705157990, 'is_available': false, 'date_time': '2038-2-9 3:35:56', 'seller': 'GalaxyBound Expeditions'},
      {'id': 4, 'destination': 'Venus', 'distance_from_earth': 491064127, 'is_available': true, 'date_time': '2038-5-24 8:34:59', 'seller': 'GalaxyBound Expeditions'},
      {'id': 5, 'destination': 'New Tijuana', 'distance_from_earth': 993840132, 'is_available': false, 'date_time': '2038-8-26 8:30:35', 'seller': 'Celestial Journeys Co.'},
      {'id': 6, 'destination': 'Europa', 'distance_from_earth': 985990484, 'is_available': true, 'date_time': '2038-6-2 3:16:29', 'seller': 'Interstellar Odyssey Group'},
      {'id': 7, 'destination': 'Venus', 'distance_from_earth': 213842165, 'is_available': false, 'date_time': '2038-5-13 7:01:54', 'seller': 'Interstellar Odyssey Group'},
      {'id': 8, 'destination': 'Europa', 'distance_from_earth': 725391907, 'is_available': false, 'date_time': '2038-3-7 5:47:03', 'seller': 'GalaxyBound Expeditions'},
      {'id': 9, 'destination': 'Nibiru', 'distance_from_earth': 634020610, 'is_available': false, 'date_time': '2038-3-2 7:17:05', 'seller': 'Interstellar Odyssey Group'}]
      );
    }
