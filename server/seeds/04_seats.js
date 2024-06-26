/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('seats').del()
  await knex('seats').insert(
    [{'seat_type_int': 1, 'launch': 1, 'passenger': 5, 'price': 1180},
    {'seat_type_int': 1, 'launch': 8, 'passenger': 1, 'price': 1189},
    {'seat_type_int': 2, 'launch': 3, 'passenger': 5, 'price': 1091},
    {'seat_type_int': 3, 'launch': 7, 'passenger': 7, 'price': 635},
    {'seat_type_int': 1, 'launch': 3, 'passenger': 7, 'price': 1129},
    {'seat_type_int': 2, 'launch': 8, 'passenger': 3, 'price': 638},
    {'seat_type_int': 1, 'launch': 7, 'passenger': 4, 'price': 970},
    {'seat_type_int': 2, 'launch': 6, 'passenger': 10, 'price': 962},
    {'seat_type_int': 3, 'launch': 4, 'passenger': 1, 'price': 1244},
    {'seat_type_int': 1, 'launch': 7, 'passenger': 2, 'price': 716},
    {'seat_type_int': 1, 'launch': 2, 'passenger': 10, 'price': 572},
    {'seat_type_int': 2, 'launch': 2, 'passenger': 1, 'price': 1481},
    {'seat_type_int': 3, 'launch': 4, 'passenger': 8, 'price': 524},
    {'seat_type_int': 3, 'launch': 1, 'passenger': 10, 'price': 1328},
    {'seat_type_int': 2, 'launch': 8, 'passenger': 10, 'price': 1384},
    {'seat_type_int': 1, 'launch': 9, 'passenger': 9, 'price': 1079},
    {'seat_type_int': 1, 'launch': 2, 'passenger': 1, 'price': 1083},
    {'seat_type_int': 1, 'launch': 6, 'passenger': 3, 'price': 872},
    {'seat_type_int': 2, 'launch': 1, 'passenger': 5, 'price': 701},
    {'seat_type_int': 3, 'launch': 8, 'passenger': 1, 'price': 1072},
    {'seat_type_int': 1, 'launch': 5, 'passenger': 10, 'price': 747},
    {'seat_type_int': 3, 'launch': 9, 'passenger': 1, 'price': 764},
    {'seat_type_int': 1, 'launch': 2, 'passenger': 6, 'price': 528},
    {'seat_type_int': 1, 'launch': 6, 'passenger': 2, 'price': 1119},
    {'seat_type_int': 2, 'launch': 2, 'passenger': 8, 'price': 892},
    {'seat_type_int': 3, 'launch': 3, 'passenger': 1, 'price': 836},
    {'seat_type_int': 2, 'launch': 5, 'passenger': 1, 'price': 969},
    {'seat_type_int': 1, 'launch': 4, 'passenger': 5, 'price': 1023},
    {'seat_type_int': 3, 'launch': 6, 'passenger': 1, 'price': 1449},
    {'seat_type_int': 1, 'launch': 7, 'passenger': 1, 'price': 1076},
    {'seat_type_int': 2, 'launch': 3, 'passenger': 2, 'price': 1240},
    {'seat_type_int': 2, 'launch': 2, 'passenger': 6, 'price': 666},
    {'seat_type_int': 2, 'launch': 9, 'passenger': 5, 'price': 1322},
    {'seat_type_int': 1, 'launch': 6, 'passenger': 1, 'price': 797},
    {'seat_type_int': 2, 'launch': 5, 'passenger': 6, 'price': 618},
    {'seat_type_int': 3, 'launch': 9, 'passenger': 3, 'price': 671},
    {'seat_type_int': 1, 'launch': 5, 'passenger': 6, 'price': 528},
    {'seat_type_int': 3, 'launch': 5, 'passenger': 8, 'price': 502},
    {'seat_type_int': 1, 'launch': 7, 'passenger': 7, 'price': 1306},
    {'seat_type_int': 3, 'launch': 4, 'passenger': 1, 'price': 1088},
    {'seat_type_int': 2, 'launch': 3, 'passenger': 1, 'price': 728},
    {'seat_type_int': 1, 'launch': 1, 'passenger': 3, 'price': 692},
    {'seat_type_int': 3, 'launch': 3, 'passenger': 1, 'price': 1271},
    {'seat_type_int': 2, 'launch': 7, 'passenger': 10, 'price': 1197},
    {'seat_type_int': 3, 'launch': 2, 'passenger': 9, 'price': 1293},
    {'seat_type_int': 1, 'launch': 7, 'passenger': 5, 'price': 582},
    {'seat_type_int': 3, 'launch': 3, 'passenger': 1, 'price': 850},
    {'seat_type_int': 1, 'launch': 1, 'passenger': 8, 'price': 1273},
    {'seat_type_int': 3, 'launch': 4, 'price': 1067},
    {'seat_type_int': 3, 'launch': 4, 'price': 1067},
    {'seat_type_int': 3, 'launch': 4, 'price': 1067},
    {'seat_type_int': 3, 'launch': 4, 'price': 1067},
    {'seat_type_int': 3, 'launch': 4, 'price': 1067},
    {'seat_type_int': 3, 'launch': 4, 'price': 1067},
    {'seat_type_int': 1, 'launch': 4, 'price': 730}]
  );
};
