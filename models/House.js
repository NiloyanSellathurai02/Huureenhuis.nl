const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: { type: "string", unique: true, required: true },
  address: {
    street_name: "string",
    house_number: "string",
    zip_code: "string",
    city: "string",
  },
  surface: "number",
  rooms: "number",
  price: "number",
  type: "string",
});

const House = mongoose.model("House", schema);

module.exports = House;
