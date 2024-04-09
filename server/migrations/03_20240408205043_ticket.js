/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('ticket', table => {
      table.increments('id');
      table.integer('purchasing_user');
      table.integer('launch');
      //table.foreign('passenger_ids').references('id').inTable('user_account')
      //seats foreign key
      //user accounts
  })
};


/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
  // return knex.schema.alterTable('launch', table => {
  //     table.dropForeign('passenger_ids');
  // })
  // .then(function() {
      return knex.schema.dropTableIfExists('ticket');
  //});
};
