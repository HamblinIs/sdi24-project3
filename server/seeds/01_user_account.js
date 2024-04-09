/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_account').del()
  await knex('user_account').insert([
    {id: 1, name: 'Hector Salamanca', address: '6209 Aurora Blvd', email: 'notABadGuy3302@gmail.com', username: 'OldDude203', password: 'password123'},
    {id: 2, name: 'Zezima', address: '6209 Aurora Blvd', email: 'notABadGuy3302@gmail.com', username: 'OldDude203', password: 'password123'},
    {id: 3, name: 'Selena Gomez', address: '6209 Aurora Blvd', email: 'notABadGuy3302@gmail.com', username: 'OldDude203', password: 'password123'},
  ]);
};
