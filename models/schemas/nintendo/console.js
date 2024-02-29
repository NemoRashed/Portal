const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConsoleSchema = new Schema(
  {
    model: String,
    image: String,
    url: String,
    description: String,
    repairs: Object,
  },
  { timestamps: false }
);

module.exports = ConsoleSchema;
