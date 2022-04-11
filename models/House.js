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
  type_id: "string",
  img: "string",
  status: "string",
});

schema.virtual("type", {
  ref: "Type",
  localField: "type_id",
  foreignField: "id",
  justOne: true,
});

schema.set("toObject", { virtuals: true });
schema.set("toJSON", { virtuals: true });

const House = mongoose.model("House", schema);

module.exports = House;
