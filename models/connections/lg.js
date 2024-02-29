const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGODB_URI5,{dbName: 'lg'});
conn.model('listlg', require('../schemas/lg/listlg'),'listlg');

conn.model('listphone', require('../schemas/lg/listphone'),'listphone');
conn.model('phone', require('../schemas/lg/phone'),'phone');

module.exports = conn;

