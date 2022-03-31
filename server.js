"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const port = 2000;

const { House } = require("./models");

app.get("/houses", async (req, res) => {
  let foundedHouses = await House.find();
  res.send(foundedHouses);
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log("De app luistert naar 2000");
});
