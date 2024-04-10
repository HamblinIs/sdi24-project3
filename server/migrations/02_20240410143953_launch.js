/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('launch', table => {
    table.increments('id');
    table.string('destination');
    table.bigint('distance_from_earth');
    table.boolean('is_available');
    table.datetime('date_time');
    table.string('seller');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('launch');
};
