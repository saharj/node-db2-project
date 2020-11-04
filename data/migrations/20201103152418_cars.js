exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    // creates a primary key called id
    tbl.increments();
    tbl.text("VIN", 20).unique().notNullable();
    tbl.text("make").notNullable();
    tbl.text("model").notNullable();
    tbl.text("track trans");
    tbl.text("status");
    tbl.decimal("mileage").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
