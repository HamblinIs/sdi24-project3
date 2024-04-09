/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('user-account', function(table) => {
        table.increments('id');
        table.boolean('is-seller');
        table.boolean('is-buyer');
        table.string('name');
        table.string('address');
        table.string('email');
        table.string('username');
        table.string('password')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('user-account', table => {
        return knex.schema.dropTableIfExists('user-account');
    });
};
