const gulp = require('gulp');
const concat = require('gulp-concat');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', () => {
  gulp.src(['_less/stjerneman.less'])
  .pipe(less())
  .pipe(autoprefixer())
  .pipe(cleanCSS())
  .pipe(concat('stjerneman.min.css'))
  .pipe(gulp.dest('stylesheets'))
});

gulp.task('scripts', () =>  {
  gulp.src(['_javascripts/*.js', '!_javascripts/*.min.js'])
    .pipe(uglify())
    .pipe(concat('stjerneman.min.js'))
    .pipe(gulp.dest('javascripts'));
});

gulp.task('vendor-css', ['icons'], () => {
  gulp.src([
    'bower_components/normalize.css/normalize.css',
    'bower_components/fontawesome/css/font-awesome.min.css',
    'node_modules/highlight.js/styles/github-gist.css',
    'bower_components/slick-carousel/slick/slick.less',
    'bower_components/slick-carousel/slick/slick-theme.less',
    '_less/vendor.less'
  ])
  .pipe(less())
  .pipe(concat('vendor.min.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('stylesheets'));
});

gulp.task('vendor-script', () => {
  gulp.src([
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/slick-carousel/slick/slick.min.js'
    ])
    .pipe(uglify())
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('javascripts'));
});

gulp.task('icons', () =>  {
  gulp.src([
    'bower_components/fontawesome/fonts/**/*',
    'bower_components/slick-carousel/slick/fonts/**/*'
  ])
  .pipe(gulp.dest('fonts'));
});

gulp.task('default', ['styles', 'scripts'], () => {
  gulp.watch('_less/*.less', ['styles']);
  gulp.watch(['_javascripts/**/*.js', '!_javascripts/javascripts/**/*.min.js'], ['scripts']);
});

gulp.task('full', ['styles', 'scripts', 'vendor-css', 'vendor-script']);
