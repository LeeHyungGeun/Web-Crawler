var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

var gutil = require('gulp-util');

var configs = {
    webpack: {
        dev: require('./configs/webpack.config.dev.js'),
        prod: require('./configs/webpack.config.prod.js')
    },
    server: require('./configs/server.config.js'),
    nodemon: require('./configs/nodemon.config.js'),
    bs: require('./configs/bs.config.js')
};

gulp.task('prod', prod);
gulp.task('dev', dev);
gulp.task('default', dev);

function dev() {
    nodemonServer();
    // new WebpackDevServer(webpack(configs.webpack.dev), configs.webpack.dev.devServer)
    // .listen(configs.server.webpack.port, configs.server.webpack.host, function(err) {
    //     if (err) {
    //         throw new $.util.PluginError('webpack-dev-server', err);
    //     }
    //     else {
    //         gutil.log('[webpack-dev-server]', 'http://' + configs.server.webpack.host + ':' + configs.server.webpack.port + '/webpack-dev-server');
    //         // TODO
    //         bsServer();
    //         nodemonServer();
            
    //     }
    // });
}
function prod(callback) {
    webpack(configs.webpack.prod, function(err, stats) {
        if (err) {
            throw new $.util.PluginError('webpack', err);
            gutil.log('[webpack]', stats.toString({
                // output options
            }));
            callback();
        }
    })
}

function bsServer() {
    browserSync(configs.bs, function(err) {
        if (err) {
            gutil.log(gutil.colors.red('[BS]: ' + err));
        }
    });
}

function nodemonServer() {
    nodemon(configs.nodemon);
}