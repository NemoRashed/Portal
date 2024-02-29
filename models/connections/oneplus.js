const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGODB_URI,{dbName: 'oneplus'});
conn.model('listoneplus', require('../schemas/oneplus/listoneplus'),'listoneplus');

conn.model('listphone', require('../schemas/oneplus/listphone'),'listphone');
conn.model('phone', require('../schemas/oneplus/phone'),'phone');

module.exports = conn;

