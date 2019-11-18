const express = require("express");
const helmet = require("helmet");

const carRouter = require("../car-dealer/car-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/cardealer", carRouter);

module.exports = server;
