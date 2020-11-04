exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        { VIN: "dn35345nkjn", make: "Toyota", model: "Camry", mileage: 3435 },
        {
          VIN: "dn33577llkj",
          make: "Toyota",
          model: "Corolla",
          mileage: 76867,
        },
      ]);
    });
};
