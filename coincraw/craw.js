/*jshint esversion: 6 */
/* jshint -W030 */
module.paths = ['D:\\Software\\Software\\Node.js\\node_modules'];
'use strict';
const request = require('request');
const iconv = require('iconv-lite');
const util = require('util');

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
let url = util.format(FlowRequest, 'bitcoin', 'cny');
request.get(url, {
    headers: Header
}, function (err, res, body) {
    let result = JSON.parse(body);
    //TODO Decode data and save to database
    console.log(result.flow_distribute);
});