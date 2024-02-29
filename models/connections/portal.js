
const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGODB_URI,{dbName: 'portal'});

conn.model('User', require('../schemas/user'));
conn.model('Transaction', require('../schemas/transaction'));

module.exports = conn;

