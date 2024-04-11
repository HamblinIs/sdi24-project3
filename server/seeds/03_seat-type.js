/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('seat_type').del()
  await knex('seat_type').insert([
    {'seat_type_string': 'Storage'},
    {'seat_type_string': 'Aft'},
    {'seat_type_string': 'Stern'}
  ]);
};
