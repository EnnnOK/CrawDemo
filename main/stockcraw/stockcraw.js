/*jshint esversion: 6 */
/* jshint -W030 */
module.paths = ['D:\\Software\\Software\\Node.js\\node_modules'];
'use strict';

const request = require('request');

//TODO Get chinese and american stock data
//todo change to Promise then
//todo 解决异步问题
//数据采集和数据解析分开处理
function doRequest() {

    let stockRequest = new Promise(function (resolve, reject) {
        request.get('http://hqres.eastmoney.com/EMQuote_Center3.0/js/gridlist.min.js?v=180925193855968', function (err, res, body) {
            let tokenReg = RegExp('token=[0-9,A-Z,a-z]*');
            let tokenRes = tokenReg.exec(String(body));
            let token = tokenRes[0].replace('token=', '');
            resolve(token);
        });
    });

    stockRequest.then(function (token) {
        request.get('http://nufm.dfcfw.com/EM_Finance2014NumericApplication/JS.aspx?type=CT&sty=FCRH&token=' + token + '&cmd=0000011,3990012,0003001,DJIA_UI,SPX_UI,NDX_UI,2CN225_UI,2C', function (err, res, body) {
            let stockDate = JSON.parse(body.replace('(', '').replace(')', ''));
            // console.log(stockDate);
            let test1 = String(stockDate[1]).split(',');
            let test2 = String(stockDate[2]).split(',');
            let stocks = [
                { exChangeName: test1[2], changeValue: test1[5], date: test1[6] },
                { exChangeName: test2[2], changeValue: test1[5], date: test1[6] }
            ];
            console.log(stocks)
            return stocks;
        });
    });

}

exports.getStock = doRequest;