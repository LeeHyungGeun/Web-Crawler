const path = require('path');
const fs = require('fs');
// const Regex = require('regex');
// const escape = require('escape-html');
// const StringDecoder = require('string_decoder').StringDecoder;
// const decoder = new StringDecoder('utf8');

let file = (function file() {
    function save (body, filename, callback) {
        filename = getHostname(filename);
        fs.writeFile(path.resolve(__dirname, '../Files', (getHostname(filename) + '.html')), body, 'utf8', callback);
    }

    return {
        save: save
    };

}());

module.exports = file;

function getHostname(url) {
    let regex = /^(?:(?:http|https|ftp|file):\/\/)?([^\/\#\?]+)/;
    let result = regex.exec(url)[1];
    return result;
}

// (?:x) x와 일치하는 것을 찾는다. 단 그룹은 기억하지 않는다.
// x(?=y) x가 y와 이어 있는 것을 찾는다.
// x(?!y) x가 y와 이어져 있지 않는 것을 찾는다.