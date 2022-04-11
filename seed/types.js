require("dotenv").config();

const { Type } = require("../models");

const seedTypes = async (types) => {
  try {
    console.log("Seeding types...");

    await Type.insertMany(types);

    console.log("Seeding complete...");
    process.exit();
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

const types = [
  {
    id: "1",
    name: "Penthouse",
  },
  {
    id: "2",
    name: "familie-appartement",
  },
  {
    id: "3",
    name: "Studio",
  },
];

exports.module = seedTypes(types);
