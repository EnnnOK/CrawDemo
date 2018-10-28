/*jshint esversion: 6 */
/* jshint -W030 */
module.paths = ['D:\\Software\\Software\\Node.js\\node_modules'];
'use strict';
const mysql = require('mysql');
const util = require('util');

//TODO change table name, id auto increate
const INSERT_SQL = 'INSERT INTO %s(date,price,chain_value,flow) values(?,?,?,?,?)';
//TODO Make database config file
const DATABASE_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'coin'
};

let connection = mysql.createConnection(DATABASE_CONFIG);

connection.connect(function (err) {
    if (err) throw err;
});

function saveCoinData(tableName, date, price, chain_value, flow) {
    connection.query(
        util.format(INSERT_SQL, tableName),
        [date, price, chain_value, flow],
        function (err, result, fields) {
            if (err) throw err;
            //TODO 
        });
}
