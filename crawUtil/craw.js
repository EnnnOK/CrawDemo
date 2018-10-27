module.paths = ['D:\\Software\\Software\\Node.js\\node_modules'];
console.log('---start---');

const request = require('request');
const iconv = require('iconv-lite');


//TODO Base cookie get
request.get('https://www.aicoin.net.cn/api/coin-profile/fund?coin_type=bitcoin^&currency=cny', {
    headers: {
        'Cookie': 'XSRF-TOKEN=eyJpdiI6InV5dnlEMldvc3BXY0Z4bkh1azVHSGc9PSIsInZhbHVlIjoiWmZiTmdNXC8xZnVwbEtVTHF4Y1BKaUFYVEhnZXdzZGRqR2d3bU9ZOVlVd3FzNVBCTkM2VmJSTFVSNVlBemgxZ1wvNGcyWXFENmVnSFZsRXoxUk5FRUdYQT09IiwibWFjIjoiMWJkMzBkOThlZmM4NjhkM2RjZTYzNTlkMDE3YTc0OWE1ZmViZjMyNGRlMTE5NjVlMTBhNzhlODdmOWNlNWEwMiJ9;',
        'Accept-Language':'zh-CN,zh;q=0.9,en;q=0.8" -H "User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
        'Accept':'application/json',
        'Referer':'https://www.aicoin.net.cn/',
        'Accept-Encoding':'application/json',
        'Connection':'keep-alive'
    }
}, function (err, res, body) {
    // console.log(res);
    // console.log(iconv.decode(body,'gbk'));
    console.log(body)
    // console.log(err);
});