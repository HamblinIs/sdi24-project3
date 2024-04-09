
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */




exports.seed = async function(knex) {
  // Deletes ALL existing entries

    await knex('launch').del()
    await knex('launch').insert(
      [{'id': 0, 'price': 866, 'destination': ['New Tijuana'], 'distance_from_earth': 297859790, 'not_fully_booked': 'false', 'number_of_passengers': 25, 'seats': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'datetime': '2038-9-4 1:55:12', 'seller_company': 'GalaxyBound Expeditions', 'passenger_ids': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]},
      {'id': 1, 'price': 852, 'destination': ['Venus'], 'distance_from_earth': 894287666, 'not_fully_booked': 'false', 'number_of_passengers': 90, 'seats': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'datetime': '2038-1-4 9:30:19', 'seller_company': 'GalaxyBound Expeditions', 'passenger_ids': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]},
      {'id': 2, 'price': 871, 'destination': ['Venus'], 'distance_from_earth': 513075456, 'not_fully_booked': 'false', 'number_of_passengers': 48, 'seats': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'datetime': '2038-8-21 6:8:48', 'seller_company': 'Interstellar Odyssey Group', 'passenger_ids': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]},
      {'id': 3, 'price': 981, 'destination': ['Venus'], 'distance_from_earth': 766949806, 'not_fully_booked': 'true', 'number_of_passengers': 92, 'seats': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'datetime': '2038-8-24 9:38:5', 'seller_company': 'Celestial Journeys Co.', 'passenger_ids': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]},
      {'id': 4, 'price': 588, 'destination': ['Europa'], 'distance_from_earth': 236659611, 'not_fully_booked': 'false', 'number_of_passengers': 29, 'seats': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'datetime': '2038-10-7 6:31:10', 'seller_company': 'Interstellar Odyssey Group', 'passenger_ids': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]},
      {'id': 5, 'price': 905, 'destination': ['Venus'], 'distance_from_earth': 239429575, 'not_fully_booked': 'true', 'number_of_passengers': 123, 'seats': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'datetime': '2038-1-18 6:18:3', 'seller_company': 'Celestial Journeys Co.', 'passenger_ids': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]},
      {'id': 6, 'price': 522, 'destination': ['Mars'], 'distance_from_earth': 456343876, 'not_fully_booked': 'true', 'number_of_passengers': 10, 'seats': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'datetime': '2038-7-7 6:54:7', 'seller_company': 'StarVoyage Enterprises', 'passenger_ids': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]},
      {'id': 7, 'price': 849, 'destination': ['Venus'], 'distance_from_earth': 443721452, 'not_fully_booked': 'true', 'number_of_passengers': 41, 'seats': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'datetime': '2038-8-4 6:54:4', 'seller_company': 'GalaxyBound Expeditions', 'passenger_ids': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]},
      {'id': 8, 'price': 788, 'destination': ['Venus'], 'distance_from_earth': 735429767, 'not_fully_booked': 'false', 'number_of_passengers': 40, 'seats': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'datetime': '2038-5-23 8:12:37', 'seller_company': 'Cosmic Wanderlust Ventures', 'passenger_ids': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]},
      {'id': 9, 'price': 922, 'destination': ['Mars'], 'distance_from_earth': 152703336, 'not_fully_booked': 'false', 'number_of_passengers': 22, 'seats': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'datetime': '2038-8-11 6:35:27', 'seller_company': 'Interstellar Odyssey Group', 'passenger_ids': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}]
      );
  }

