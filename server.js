"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const port = 2000;

const { House } = require("./models");
app.use(express.json());

app.post("/houses", async (req, res) => {
  try {
    console.log(req.body);
    const houseLocation = req.body.locationhouse;
    const typeHouse = req.body.type;
    const priceHouse = req.body.price;
    console.log(houseLocation, typeHouse, priceHouse);
    let [lower, higher] = priceHouse.split("-");
    lower = Number(lower);
    higher = Number(higher);

    const correctHouses = await House.find({
      "address.city": houseLocation,
      type: typeHouse,
      $and: [{ price: { $gte: lower } }, { price: { $lte: higher } }],
    });
    console.log(correctHouses);

    res.send(correctHouses);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log("De app luistert naar 2000");
});
