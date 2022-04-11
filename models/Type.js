const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: { type: "string", unique: true, required: true },
  name: "string",
});

const Type = mongoose.model("Type", schema);

module.exports = Type;
