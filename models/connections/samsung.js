const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGODB_URI,{dbName: 'samsung'});

conn.model('listsamsung', require('../schemas/samsung/listsamsung'),'listsamsung');


conn.model('listgalaxys', require('../schemas/samsung/listgalaxys'),'listgalaxys');
conn.model('galaxys', require('../schemas/samsung/galaxys'),'galaxys');

conn.model('listgalaxynote', require('../schemas/samsung/listgalaxynote'),'listgalaxynote');
conn.model('galaxynote', require('../schemas/samsung/galaxynote'),'galaxynote');

module.exports = conn;

