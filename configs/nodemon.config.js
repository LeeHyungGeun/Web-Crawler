const path = require('path');
module.exports = {
    script: path.resolve(__dirname, '../server/server.js'),
    ext: 'js html',
    env: { 'NODE_ENV': 'development' },
    ignore: [
        'node_modules/'
    ],
    watch: [
        path.resolve(__dirname, '../server/**/*.*')
    ],
    stdout: true,
    readable: true,
    nodeArgs: ['--debug']
};