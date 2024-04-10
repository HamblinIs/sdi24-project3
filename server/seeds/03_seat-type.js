/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('seat_type').del()
  await knex('seat_type').insert([
    {id: 1, seat_type_string: 'Storage'},
    {id: 2, seat_type_string: 'Aft'},
    {id: 3, seat_type_string: 'Stern'}
  ]);
};
