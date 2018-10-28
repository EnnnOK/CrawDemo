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
    //main_inflow, main_in_pro, main_outflow, main_out_pro
    //retail_inflow, retail_in_pro, retail_outflow, retail_out_pro
    //main_net_inflow, retail_net_inflow, big_inflow, big_out_flow
    //mid_inflow, mid_outflow, mid_net_flow, little_inflow, little_outflow, little_net_flow
    console.log(result.flow_distribute);
});