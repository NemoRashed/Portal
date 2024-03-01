const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const datarecoverySchema = new Schema(
  {
    name: String,
    image: String,
    description: String,
    types: Object,
  },
  { timestamps: false }
);

module.exports = datarecoverySchema;
