require("dotenv").config();
const { nanoid } = require("nanoid");

const { House } = require("../models");

const seedHouses = async (houses) => {
  try {
    console.log("Seeding houses...");

    await House.insertMany(houses);

    console.log("Seeding complete...");
    process.exit();
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

const houses = [
  {
    id: nanoid(),
    address: {
      street_name: "Gustav Mahleraan",
      house_number: "270",
      zip_code: "1082ME",
      city: "AMSTERDAM",
    },
    surface: 210,
    rooms: 4,
    price: 1750,
    type: "penthouse",
  },
  {
    id: nanoid(),
    address: {
      street_name: "Koninginneweg",
      house_number: "105bov",
      zip_code: "1075CK ",
      city: "AMSTERDAM",
    },
    surface: 150,
    rooms: 3,
    price: 1550,
    type: "familie appartement",
  },
  {
    id: nanoid(),
    address: {
      street_name: "Bos en Lommerplantsoen",
      house_number: "29B",
      zip_code: "1055AA",
      city: "AMSTERDAM",
    },
    surface: 31,
    rooms: 1,
    price: 450,
    type: "Studio",
  },
  {
    id: nanoid(),
    address: {
      street_name: "Rinus Michelslaan",
      house_number: "285",
      zip_code: "1061MB",
      city: "AMSTERDAM",
    },
    surface: 70,
    rooms: 2,
    price: 750,
    type: "familie appartement",
  },
  {
    id: nanoid(),
    address: {
      street_name: "Koekangestraat",
      house_number: "19",
      zip_code: "2541PT",
      city: "Den Haag",
    },
    surface: 55,
    rooms: 2,
    price: 500,
    type: "familie appartement",
  },
  {
    id: nanoid(),
    address: {
      street_name: "Van der Hoevenplein",
      house_number: "237",
      zip_code: " 3072MK",
      city: "Rotterdam",
    },
    surface: 150,
    rooms: 2,
    price: 2500,
    type: "penthouse",
  },
];

exports.module = seedHouses(houses);