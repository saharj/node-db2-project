const express = require("express");

const carsDB = require("./carDealerModel");

const Router = express.Router();

Router.get("/", (req, res) => {
  carsDB
    .get()
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error getting the data" });
    });
});

Router.post("/", (req, res) => {
  carsDB
    .insert(req.body)
    .then((resp) => {
      res.status(201).json(resp);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error adding the car" });
    });
});

module.exports = Router;
