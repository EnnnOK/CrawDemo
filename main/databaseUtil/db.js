/*jshint esversion: 6 */
/* jshint -W030 */
module.paths = ['D:\\Software\\Software\\Node.js\\node_modules', 'D://coinanalystic//main'];
'use strict';
const mysql = require('mysql');
const util = require('util');
const coin = require('coincraw/coincraw');


//TODO change table name, id auto increate
const INSERT_COIN = 'INSERT INTO %s(date, price, chain_value, flow) values(?, ?, ?, ?)';
const INSERT_STOCK = 'INSERT INTO stock_t(exchange, insert_date, change_value, record_date) values(?, ?, ?, ?)';
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
    let saveCoin = new Promise(function (resolve, reject) {
        connection.query('select coin_table_name from coin_route_table where coin_alias_aicoin = ?',
            [tableName],
            function (err, result, fields) {
                resolve(result[0].coin_table_name);
            });
    });

    saveCoin.then(function (coin_table_name) {
        connection.query(
            util.format(INSERT_COIN, coin_table_name),
            [date, price, chain_value, flow],
            function (err, result, fields) {
                if (err) throw err;
            });
    });
}

function saveStockDate(exchange, insert_date, change_value, record_date) {
    console.log(connection.state);
    connection.query(
        INSERT_STOCK,
        [exchange, insert_date, change_value, record_date],
        function (err, result, fields) {
            console.log('err' + err);
            console.log('result' + result);
            console.log('fields' + fields);
        });
}

function showtables() {
    connection.query('select * from coin_route_table',
        [],
        function (err, result, fields) {
            for (let i = 0; i < result.length; i++) {
                try {
                    coin.coinCraw(result[i].coin_alias_aicoin);
                } catch (exception) {
                    console.log(exception);
                }
            }
            // process.exit();
        });
}

exports.saveCoin = saveCoinData;
exports.saveStock = saveStockDate;
exports.showTable = showtables;