const db = require("../dbConfig");

function get(id) {
  if (id) {
    return db("cars")
      .where("id", id)
      .first()
      .then((car) => {
        if (car) {
          return car;
        } else {
          return null;
        }
      });
  } else {
    return db("cars").then((cars) => {
      return cars.map((car) => {
        return car;
      });
    });
  }
}

function insert(car) {
  return db("cars")
    .insert(car, "id")
    .then(([id]) => get(id));
}

module.exports = { get, insert };
