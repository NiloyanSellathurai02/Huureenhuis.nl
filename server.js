"use strict";
require("dotenv").config();
const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 2000;

const { House, Type } = require("./models");
const { find } = require("./models/House");
app.use(express.json());

app.get("/houses", async (req, res) => {
  try {
    console.log(req.query);
    const houseLocation = req.query.locationhouse;
    const typeId = req.query.type;
    const priceHouse = req.query.price;
    console.log(houseLocation, typeId, priceHouse);
    let [lower, higher] = priceHouse.split("-");
    lower = Number(lower);
    higher = Number(higher);

    const correctHouses = await House.find({
      "address.city": houseLocation,
      type_id: typeId,
      $and: [{ price: { $gte: lower } }, { price: { $lte: higher } }],
    });

    // console.log(correctHouses);

    res.send(correctHouses);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.patch("/rented/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const correctBtnId = await House.findOneAndUpdate(
      {
        id: id,
      },
      { status: "BLOCKED" }
    );
    res.send(correctBtnId);
    console.log(correctBtnId);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/types", async (req, res) => {
  try {
    const findType = await Type.find();
    res.send(findType);
    console.log(findType);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log("De app luistert naar 2000");
});
