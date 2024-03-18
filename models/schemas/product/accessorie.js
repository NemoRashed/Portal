const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccessorieSchema = new Schema(
  {
    name: String,
    image: String,
    url: String,
    description: String,
    types: Object,
  },
  { timestamps: false }
);

module.exports = AccessorieSchema;
