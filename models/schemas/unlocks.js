const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UnlockSchema = new Schema(
  {
    name: String,
    image: String,
    description: String,
    types: Object,
  },
  { timestamps: false }
);

module.exports = UnlockSchema;
