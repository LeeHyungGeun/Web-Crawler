const server = require('./server.config.js');
const path = require('path');
console.log(server.bs);

module.exports = {
    // proxy: server.bs.host + ':' + server.server.port,
    // open: 'external',
    host: server.bs.host,
    port: server.bs.port,
    server: {
        
        baseDir: path.resolve(__dirname, '../app'),
        index: 'index.html'
    },
    files: [
        path.resolve(__dirname, '../app/**/*.*')
    ],
    ghostMode: {
        clicks: true,
        location: false,
        forms: true,
        scroll: true
    },
    injectChanges: true,
    logFileChanges: true,
    logLevel: 'debug',
    logPrefix: 'BS',
    notify: true,
    reloadDelay: 1
};