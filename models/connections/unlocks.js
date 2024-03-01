const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGODB_URI,{dbName: 'unlocks'});

conn.model('unlock', require('../schemas/unlocks'),'unlock');

module.exports = conn;

