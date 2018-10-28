'use strict';
module.paths=['D://coinanalystic//main']
let outname = require('stockcraw/stockcraw');
let db = require('databaseUtil/db');
// console.log('bootstrap: '+test);
// let stocks=outname();
// console.log('out: '+stocks);

db.saveStockDate();