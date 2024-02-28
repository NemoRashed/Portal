const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SonySchema = new Schema(
  {
    category: String,
    image: String,
    url: String
  },
  { timestamps: false }
);

module.exports = SonySchema;
