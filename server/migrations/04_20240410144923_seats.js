/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('seats', table => {
    table.increments('id');
    table.smallint('seat_type_int');
    table.foreign('seat_type_int').references('id').inTable('seat_type');
    table.integer('launch');
    table.foreign('launch').references('id').inTable('launch');
    table.integer('passenger');
    table.foreign('passenger').references('id').inTable('user_account');
    table.smallint('price');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('seats', table => {
    table.dropForeign('launch');
    table.dropForeign('passenger');
  })
  .then(function() {
    return knex.schema.dropTableIfExists('seats');
  });
};
