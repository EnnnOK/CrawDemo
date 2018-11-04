'use strict';
module.paths=['D://coinanalystic//main'];
let stock = require('stockcraw/stockcraw');
let db = require('databaseUtil/db');
let coin = require('coincraw/coincraw');
// console.log('bootstrap: '+test);
// let stocks=outname();
// console.log('out: '+stocks);
// db.saveStockDate();

// coin.coinCraw('steem');
// stock.getStock();
db.showTable();
// process.exit();
