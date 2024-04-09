/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('launch', table => {
        table.increments('id');
        table.smallint('price');
        table.string('destination')
        table.bigint('distance_from_earth')
        table.boolean('not_fully_booked')
        table.smallint('number_of_passengers')
        table.specificType('seats', 'integer ARRAY')
        table.datetime('datetime', {useTz: false})
        table.string('seller_company')
        table.specificType('passenger_ids', 'integer ARRAY')
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
        return knex.schema.dropTableIfExists('launch');
    //});
};
