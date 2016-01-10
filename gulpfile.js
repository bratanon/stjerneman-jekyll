'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
  gulp.src(['_less/stjerneman.less'])
  .pipe(less())
  .pipe(autoprefixer())
  .pipe(minifyCSS())
  .pipe(concat('stjerneman.min.css'))
  .pipe(gulp.dest('stylesheets'))
});

gulp.task('scripts', function () {
  gulp.src(['_javascripts/*.js', '!_javascripts/*.min.js'])
    .pipe(uglify())
    .pipe(concat('stjerneman.min.js'))
    .pipe(gulp.dest('javascripts'));
});

gulp.task('vendor-css', ['icons'], function () {
  gulp.src([
    'bower_components/normalize.css/normalize.css',
    'bower_components/fontawesome/css/font-awesome.min.css',
    'bower_components/animate.css/animate.css',
    'node_modules/highlight.js/styles/github-gist.css',
    'bower_components/slick-carousel/slick/slick.less',
    'bower_components/slick-carousel/slick/slick-theme.less',
    '_less/vendor.less'
  ])
  .pipe(less())
  .pipe(concat('vendor.min.css'))
  .pipe(minifyCSS())
  .pipe(gulp.dest('stylesheets'));
});

gulp.task('vendor-script', function () {
  gulp.src([
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/WOW/dist/wow.min.js',
      'bower_components/slick-carousel/slick/slick.min.js'
    ])
    .pipe(uglify())
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('javascripts'));
});

gulp.task('icons', function () {
  gulp.src([
    'bower_components/fontawesome/fonts/**/*',
    'bower_components/slick-carousel/slick/fonts/**/*'
  ])
  .pipe(gulp.dest('fonts'));
});

gulp.task('default', ['styles', 'scripts'], function () {
  gulp.watch('_less/*.less', ['styles']);
  gulp.watch(['_javascripts/**/*.js', '!_javascripts/javascripts/**/*.min.js'], ['scripts']);
});

gulp.task('full', ['styles', 'scripts', 'vendor-css', 'vendor-script']);
