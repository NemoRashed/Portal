const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    repair: String,
    total: Number,
    part:Number,
    profit:Number,
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

    device: { brand: String, make: String, model: String, repair: String },
    cost: { parts: Number, labor: Number, total: Number },

    service: {}
    product: {}

    cart:{
      service:{
cost:number
description:string
      }
      product:{
        cost:number
        description:string
      }
      processing:number
      tax:number 
      tip:number
    }
Cart style works best if i itemize website stuff like repairs and products 

       customer: String,
    device: String,
    description:String,
    cost: Number,
    location: String,
    user: String,
    date: String,
*/
