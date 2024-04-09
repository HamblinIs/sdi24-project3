/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('ticket', function(table) => {
        table.increments('id');
        table.integer('purchasing-user');
        table.foreign('purchasing-user').references('user-account.id').inTable('user-account');
        table.integer('launch');
        table.foreign('launch').references('launch.id').inTable('launch');
    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('ticket', table => {
        table.dropForeign('purchasing-user');
        table.dropForeign('launch');
    })
    .then(function() {
        return knex.schema.dropTableIfExists('ticket');
    });
};
