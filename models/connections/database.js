const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGODB_URI4);

// Oneplus 
conn.model('phone', require('../schemas/oneplus/phone'),'phone');
conn.model('phonetransfer', require('../schemas/oneplus/phone'),'phonetransfer');



module.exports = conn;

