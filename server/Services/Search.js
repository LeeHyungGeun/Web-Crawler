const Crawler = require('crawler');
const Filter = require('./Filter.js');
const Promise = require('promise');

function Search (options) {
    let self = this;
    options = options || {};
    self.init(options);
}
Search.prototype.init = function init (options) {
    let self = this;
}
Search.prototype.get = function (url) {
    return new Promise(function (resolve, reject) {
        let self = this;
        let c = new Crawler({
            maxConnections: 10,
            callback: (error, res, done) => {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                else {
                    resolve(res);
                    // let $ = res.$;
                    // resolve($('html'));
                }
                done();
            }
        });
        c.queue(url);
    });
};

module.exports = Search;