const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGODB_URI,{dbName: 'customization'});

conn.model('custom', require('../schemas/customization'),'custom');

module.exports = conn;

