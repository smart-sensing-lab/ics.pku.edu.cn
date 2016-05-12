var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var fork = require('child_process').fork;
var tinyLr = require('tiny-lr');
var async = require('async');
var config = require('./config.json');
var GulpSSH = require('gulp-ssh');
var BPromise = require('bluebird');
var fs = BPromise.promisifyAll(require("fs"));
var asset = require('brick-asset');
var sshConfig = {
    host: 'acer.harttle.com',
    port: 22,
    username: 'harttle',
    privateKey: fs.readFileSync('/Users/harttle/.ssh/id_rsa')
};
var gulpSSH = new GulpSSH({
    sshConfig
});

gulp.task('deploy', function() {
    return gulpSSH
        .shell([
            'cd repos/lab',
            'git pull',
            'npm install',
            'brick-asset all'
            'sudo systemctl restart lab'
        ], {
            filePath: 'deploy.log'
        })
        .pipe(gulp.dest('.'));
});

var dirs = {
    server: [
        'bin/www',
        'app.js',
        'apis/**/*.js',
        'models/**/*.js'
    ],
    asset: ['public/site.css', 'public/site.js'],
    bricks: 'bricks/**'
};

var livereload = {
    instance: null,
    port: config.debug.port,
    start: function(callback) {
        livereload.instance = tinyLr();
        livereload.instance.listen(livereload.port, callback);
    },
    changed: function(file, callback) {
        console.log('[livereload] changed');
        livereload.instance.changed({
            body: {
                files: [file]
            }
        });
        callback && callback();
    }
};

var app = {
    instance: {},
    path: 'bin/www',
    env: {
        DEBUG: 'www:*',
        DEBUG_COLORS: ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'grey']
    },
    start: function(callback) {
        process.execArgv.push('--harmony');
        app.instance = fork(app.path, {
            silent: true,
            env: app.env
        });
        app.instance.stdout.pipe(process.stdout);
        app.instance.stderr.pipe(process.stderr);

        gutil.log(gutil.colors.cyan('Starting'), 'express server ( PID:', app.instance.pid, ')');
        if (callback) callback();
    },
    stop: function(callback) {
        if (app.instance.connected) {
            app.instance.on('exit', function() {
                gutil.log(gutil.colors.red('Stopping'), 'express server ( PID:', app.instance.pid, ')');
                if (callback) callback();
            });
            return app.instance.kill('SIGINT');
        }
        if (callback) callback();
    },

    restart: function(event) {
        async.series([
            app.stop,
            app.start,
            function(callback) {
                livereload.changed(event, callback);
            }
        ]);
    },
    asset: function() {
        return asset.src('./bricks').then(function() {
            return BPromise.all([
                asset.css().then(src => fs.writeFileAsync('./public/site.css', src)),
                asset.js().then(src => fs.writeFileAsync('./public/site.js', src))
            ]);
        });
    }
};

gulp.task('asset', function() {
    return app.asset();
});

gulp.task('server', function(callback) {
    async.series([app.start, livereload.start], callback);
});

gulp.task('watch', function() {
    gulp.watch(dirs.server, app.restart);
    gulp.watch(dirs.asset, function(e) {
        console.log(e.path, e.type);
        var f = path.basename(e.path);
        switch (f) {
            case 'site.js':
                livereload.changed('/site.js');
                break;
            case 'site.css':
                livereload.changed('/site.css');
                break;
        }
    });
    gulp.watch(dirs.bricks, function(e) {
        console.log(e.path, e.type);
        var f = path.basename(e.path);
        switch (f) {
            case 'server.js':
                app.restart(e);
                break;
            case 'view.html':
                livereload.changed('.');
                break;
            default:
                app.asset();
        }
    });
});

gulp.task('default', ['asset', 'server', 'watch']);
