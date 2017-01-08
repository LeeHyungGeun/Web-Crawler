const path = require('path');
module.exports = {
    script: 'server.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' },
    ignore: [
        'node_modules/'
    ],
    watch: [
        path.resolve(__dirname, '../server/**/*.*')
    ],
    stdout: false,
    readable: false
};