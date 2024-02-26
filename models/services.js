const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServicesSchema = new Schema(
  {
    name: String,
    image: String,
    url: String
  },
  { timestamps: true }
);

const Services = mongoose.model("Services", ServicesSchema);

module.exports = Services;

















