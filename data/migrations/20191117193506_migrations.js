exports.up = function(knex) {
  return knex.schema.createTable("car-dealer", tbl => {
    // creates a primary key called id
    tbl.increments(id);
    tbl
      .string("vin", 128)
      .unique()
      .notNullable();
    tbl.string("make", 128).notNullable();
    tbl.string("model", 128).notNullable();
    tbl.string("mileage", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("car-dealer");
};
