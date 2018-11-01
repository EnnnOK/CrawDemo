/*jshint esversion: 6 */
/* jshint -W030 */
module.paths = ['D:\\Software\\Software\\Node.js\\node_modules','D://coinanalystic//main'];
'use strict';
const request = require('request');
const iconv = require('iconv-lite');
const util = require('util');
const db = require('databaseUtil/db');

const Origin = 'www.aicoin.net.cn';
const Header = {
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
    'Accept': 'application/json',
    'Referer': Origin,
    'Accept-Encoding': 'application/json',
    'Connection': 'keep-alive',
    'Host': Origin
};
const FlowRequest = 'https://' + Origin + '/api/coin-profile/fund?coin_type=%s&currency=%s';

//TODO Get all coins
//todo 数据采集和数据计息分开来处理,增加市值数量
//Make promise, 获取另一个api
function doRequest() {
    let url = util.format(FlowRequest, 'bitcoin', 'cny');
    request.get('https://www.aicoin.net.cn/api/coin-profile/analysis?coin_type=bitcoin&currency=cny', { // analysis , index
        headers: Header
    }, function (err, res, body) {
        let result = JSON.parse(body);
        console.log(result);
        db.saveCoin('bitcoin', new Date(), 111, result.data.trade_data.mc_value, result.data.statistical_data.fundNetIn_24hour);
        console.log(result.flow_distribute);
    });
}

exports.coinCraw = doRequest;