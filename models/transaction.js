const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    customer: String,
    device: String,
    cost: Number,
    location: String,
    user: String,
    date: String,
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;

/*

Repair Cost

Repair 
Accessories 
Devices 

Card Processing Charge 
Tax
Tip
Final Total

  customer: { name: String, email: String, phone: String },
    device: { brand: String, make: String, model: String, repair: String },
    cost: { parts: Number, labor: Number, total: Number },
    location: String,
    user: String,
    date: String,

*/
