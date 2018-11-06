module.paths = ['D:\\Software\\Software\\Node.js\\node_modules'];

'use strict';
let log4js = require('log4js');
log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'D://cheese.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});

function test() {
    let logger = log4js.getLogger('logInfo');
    // logger.level = 'debug';
    logger.trace('trace');
    logger.debug('debug');
    logger.info('info');
    logger.warn('info');
    logger.error('info');
    logger.fatal('info');

}
exports.log = test;