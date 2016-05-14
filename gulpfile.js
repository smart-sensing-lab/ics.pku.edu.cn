var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var fork = require('child_process').fork;
var async = require('async');
var config = require('./config.json');
var GulpSSH = require('gulp-ssh');
var watch = require('gulp-watch');
var fs = require("fs");
var asset = require('brick-asset');
var livereload = require('gulp-livereload');

if (config.deploy) {
    if (config.deploy.privateKey) {
        config.deploy.privateKey = fs.readFileSync('/Users/harttle/.ssh/id_rsa');
    }
    var gulpSSH = new GulpSSH({
        sshConfig: config.deploy
    });
}

var app = {
    instance: {},
    path: 'bin/www',
    env: {
        DEBUG: 'ics:*',
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
    livereload: function(cb) {
        livereload.listen({
            basePath: 'public'
        });
        cb && cb();
    },
    css: function(cb) {
        asset.src('./bricks')
            .then(x => asset.css())
            .then(css => fs.writeFile('./public/site.css', css, cb));
    },
    js: function(cb) {
        asset.src('./bricks')
            .then(x => asset.js())
            .then(js => fs.writeFile('./public/site.js', js, cb));
    }
};

gulp.task('server', function(callback) {
    async.series([app.start, app.livereload], callback);
});

gulp.task('watch', function() {
    watch('./bricks/*/{client.js,client/**/*.js}', app.js);
    watch('./bricks/*/{style.less,style/**/*.less}', app.css);
    watch('./bricks/*/view.html', function(file) {
        livereload.reload('index.html');
    });
    watch('./bricks/*/server.js', app.restart);
    watch(['./public/site.css', './public/site.js'], livereload.changed);
});

if (config.deploy) {
    gulp.task('deploy', function() {
        return gulpSSH
            .shell([
                'cd repos/lab',
                'git pull',
                'npm install --production',
                'brick-asset all',
                'sudo systemctl restart lab'
            ], {
                filePath: 'deploy.log'
            })
            .pipe(gulp.dest('.'));
    });
}

gulp.task('default', ['server', 'watch']);
