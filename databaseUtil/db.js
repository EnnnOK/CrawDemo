/*jshint esversion: 6 */
/* jshint -W030 */
module.paths = ['D:\\Software\\Software\\Node.js\\node_modules'];

'use strict';
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "coin"

});

connection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("connect");
        console.log(connection.state);
        var d =Date.now().toLocaleString();
        d = new Date();
        console.log(d);
        connection.query("insert into btc_t(id,date,price,chain_value,flow) values(?,?,?,?,?)",[1,d,1,1,1], function (err, res,fs) {
            
            if (err) {
                console.log(err);
                process.exit();
            } else {
                console.log(res);
                process.exit();
            }
        });

    }
});
