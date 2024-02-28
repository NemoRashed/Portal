const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGODB_URI4);

conn.model('ipad', require('../schemas/ipad'),'ipad');
conn.model('ipadtransfer', require('../schemas/ipad'),'ipadtransfer');

module.exports = conn;

