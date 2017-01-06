var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var $ = require('gulp-load-plugins');

var configs = {
    webpack: {
        dev: require('./configs/webpack.config.dev.js'),
        prod: require('./configs/webpack.config.prod.js')
    }
};

gulp.task('prod', prod);
gulp.task('dev', dev);
gulp.task('default', dev);

function dev() {
    var host = 'localhost';
    var port = 8000;
    new WebpackDevServer(webpack(configs.webpack.dev), configs.webpack.dev.devServer)
    .listen(port, host, function(err) {
        if (err) {
            throw new $.util.PluginError('webpack-dev-server', err);
            $.util.log('[webpack-dev-server]', 'http://' + host + ':' + port + '/webpack-dev-server');
        }
        else {
            // TODO
        }
    });
}
function prod(callback) {
    webpack(configs.webpack.prod, function(err, stats) {
        if (err) {
            throw new $.util.PluginError('webpack', err);
            $.util.log('[webpack]', stats.toString({
                // output options
            }));
            callback();
        }
    })
}