const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGODB_URI5,{dbName: 'google'});
conn.model('listgoogle', require('../schemas/google/listgoogle'),'listgoogle');
conn.model('listpixel', require('../schemas/google/listpixel'),'listpixel');

conn.model('pixel', require('../schemas/google/pixel'),'pixel');

module.exports = conn;

