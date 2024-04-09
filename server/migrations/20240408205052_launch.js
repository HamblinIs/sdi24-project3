/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('launch', function(table) => {
        table.increments('id');
        table.smallint('price');
        table.string('destination')
        table.bigint('distance from earth')
        table.boolean('not fully booked')
        table.smallint('number of passengers')
        table.specificType('launch', 'INT[]')
        table.datetime('launch time + date')
    })
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('launch', table => {
        table.dropForeign('purchasing-user');
        table.dropForeign('launch');
    })
    .then(function() {
        return knex.schema.dropTableIfExists('ticket');
    });
};
