const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGODB_URI,{dbName: 'samsung'});

conn.model('listsamsung', require('../schemas/samsung/listsamsung'),'listsamsung');

module.exports = conn;

