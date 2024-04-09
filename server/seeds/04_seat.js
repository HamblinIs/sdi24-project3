/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('seat').del()
  await knex('seat').insert([
    {id: 1, purchasing_user: 1, launch: 10},
    {id: 2, purchasing_user: 2, launch: 5},
    {id: 3, purchasing_user: 3, launch: 3}
  ]);
};
