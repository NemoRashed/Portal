const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GalaxynoteSchema = new Schema(
  {
    model: String,
    image: String,
    url: String,
    description: String,
    repairs: Object,
  },
  { timestamps: false }
);

module.exports = GalaxynoteSchema;