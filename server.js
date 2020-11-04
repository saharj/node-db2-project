const express = require("express");

const carDealerRouter = require("./data/helpers/carDealerRouter");

const server = express();

server.use(express.json());
server.use("/api", carDealerRouter);

server.get("/", (req, res) => {
  res.send(`
    <h2>Let's write some middleware!</h2>
    <p>Here we are...</p>
    `);
});

module.exports = server;
