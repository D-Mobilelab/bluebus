var gulp = require('gulp');
var eslint = require('gulp-eslint');
var webpack = require('gulp-webpack');
var del = require('del');
var browsersync = require('browser-sync');
var coveralls = require('gulp-coveralls');
var shell = require('gulp-shell');
var argv = require('yargs').argv;
var ngdocs = require('gulp-ngdocs');
var insert = require('gulp-insert');
var version = argv.version ? argv.version : 'temp';

gulp.task('clean', function(){
    return del('dist/**/*', { force: true });
});

gulp.task('eslint', function() {
    return gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('test:single', shell.task(['./node_modules/karma/bin/karma start karma.conf.js']));

gulp.task('test', ['test:single'], function(){
    if(argv.watch){
        browsersync({
            port: 3000,
            startPath: '/test/lcov-report',
            server: {
                baseDir: '.'
            }
        });
        gulp.watch(['src/**/*.js', 'test/spec/*.js', 'karma.conf.js'], ['test:single', browsersync.reload]);
    }
});

gulp.task('coveralls', function(){
    gulp.src('test/lcov.info')
    .pipe(coveralls());
});

gulp.task('webpack', function(){
    return gulp.src('src/main.js')
    .pipe(webpack({
        output: {
            filename: 'bluebus.js',
            libraryTarget: 'umd',
            library: 'Bluebus'
        }
    }))
    .pipe(insert.append('\n\n/* Bluebus ' + version + ' */'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('doc:single', function(){
    gulp.src('src/main.js')
    .pipe(ngdocs.process({
        html5Mode: false,
        startPage: '/api/Bluebus'
    }))
    .pipe(gulp.dest('docs/' + version));
});

gulp.task('doc', ['doc:single'], function(){
    if(argv.watch){
        browsersync({
            port: 4000,
            startPath: '/docs/' + version,
            server: {
                baseDir: '.'
            }
        });
        gulp.watch(['src/**/*.js'], ['doc:single', browsersync.reload]);
    }
});

gulp.task('build:single', ['eslint', 'test:single', 'doc:single', 'clean', 'webpack']);

gulp.task('build', ['build:single'], function(){
    if(argv.watch){
        browsersync({
            port: 5000,
            startPath: '/examples/',
            server: {}
        });
        gulp.watch(['examples/**/*.js', 'src/**/*.js', 'test/**/*.test.js'], ['build:single', browsersync.reload]);
    }
});