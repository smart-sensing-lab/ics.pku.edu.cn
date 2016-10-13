var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var fork = require('child_process').fork;
var async = require('async');
var config = require('./config.json');
var watch = require('gulp-watch');
var fs = require("fs");
var asset = require('brick-asset');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var file = require('gulp-file');
var prettify = require('gulp-jsbeautifier');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');


var dirs = {
    client: './bricks/*/{client.js,client/**/*.js}',
    style: './bricks/**/*.less',
    app: ['./bricks/*/server.js', '*.js', 'config.json', 'models/*.js', 'api/**/*.js'],
    css: './public/site.css',
    js: './public/site.js',
    view: './bricks/*/view.html'
};

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
        gutil.log(gutil.colors.red('Starting'), 'express server ( PID:', app.instance.pid, ')');
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
            app.instance.kill('SIGINT');
        } else if (callback) callback();
    },
    restart: function(event) {
        async.series([
            app.stop,
            app.start,
            function(callback) {
                livereload.changed(event, callback);
            }
        ]);
    }
};

gulp.task('server', function(callback) {
    async.series([app.start], callback);
});

gulp.task('watch', function() {
    livereload.listen({
        port: config.livereload,
        host: config.server.host
    });
    watch(dirs.client, function(){
        gulp.run('js');
    });
    watch(dirs.style, function(){
        gulp.run('css');
    });
    watch(dirs.app, app.restart);
    watch([dirs.css, dirs.js, dirs.view], livereload.changed);
});

gulp.task('js', function(cb) {
    asset.src('./bricks')
        .then(x => asset.js())
        .then(css => file('site.js', css, {
                src: true
            })
            .pipe(prettify())
            .pipe(gulp.dest('public'))
            .on('finish', cb));
});

gulp.task('css', function(cb) {
    asset.src('./bricks')
        .then(x => asset.css())
        .then(css => file('site.css', css, {
                src: true
            })
            .pipe(sourcemaps.init())
            .pipe(autoprefixer({
                browsers: ['> 90%', 'IE >= 8']
            }))
            .pipe(prettify())
            .pipe(gulp.dest('public'))
            .on('finish', cb));
});

gulp.task('dist', ['css', 'js'], function() {
    gulp.src(dirs.js)
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('public'));
    gulp.src(dirs.css)
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('public'));
});

gulp.task('build', ['js', 'css']);
gulp.task('default', ['js', 'css', 'server', 'watch']);
