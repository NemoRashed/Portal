const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGODB_URI,{dbName: 'cleaning'});

conn.model('cleaning', require('../schemas/cleaning'),'cleaning');

module.exports = conn;

