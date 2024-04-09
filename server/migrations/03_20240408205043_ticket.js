/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('ticket', table => {
        table.increments('id');
        table.integer('purchasing_user').unsigned();
        table.foreign('purchasing_user').references('id').inTable('user_account');
        table.integer('launch').unsigned();
        table.foreign('launch').references('id').inTable('launch');
    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('ticket', table => {
        table.dropForeign('purchasing_user');
        table.dropForeign('launch');
    })
    .then(function() {
        return knex.schema.dropTableIfExists('ticket');
    });
};
