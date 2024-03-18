const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGODB_URI,{dbName: 'product'});

conn.model('listproduct', require('../schemas/product/listproduct'),'listproduct');
conn.model('accessorie', require('../schemas/product/accessorie'),'accessorie');
conn.model('listaccessorie', require('../schemas/product/listaccessorie'),'listaccessorie');

module.exports = conn;

