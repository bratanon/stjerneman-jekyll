const gulp = require('gulp');
const concat = require('gulp-concat');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', () => {
  return gulp.src(['_less/stjerneman.less'])
  .pipe(less())
  .pipe(autoprefixer())
  .pipe(cleanCSS())
  .pipe(concat('stjerneman.min.css'))
  .pipe(gulp.dest('assets/stylesheets'))
});

gulp.task('scripts', () =>  {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/slick-carousel/slick/slick.min.js',
    '_javascripts/*.js',
    '!_javascripts/*.min.js'
  ])
    .pipe(uglify())
    .pipe(concat('stjerneman.min.js'))
    .pipe(gulp.dest('assets/javascripts'));
});

gulp.task('vendor:css', () => {
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/font-awesome/css/font-awesome.min.css',
    'node_modules/highlight.js/styles/github-gist.css',
    'node_modules/slick-carousel/slick/slick.less',
    '_less/vendors/slick-overrides.less',
    '_less/fonts.less'
  ])
  .pipe(less())
  .pipe(autoprefixer())
  .pipe(cleanCSS({keepSpecialComments : 0}))
  .pipe(concat('vendor.min.css'))
  .pipe(gulp.dest('assets/stylesheets'));
});

gulp.task('vendor:fonts', () =>  {
  return gulp.src([
    'node_modules/font-awesome/fonts/**/*',
    'node_modules/slick-carousel/slick/fonts/**/*'
  ])
    .pipe(gulp.dest('assets/fonts'));
});

gulp.task('default', ['styles', 'scripts'], () => {
  gulp.watch('_less/*.less', ['styles']);
  gulp.watch(['_javascripts/**/*.js', '!_javascripts/javascripts/**/*.min.js'], ['scripts']);
});

gulp.task('vendor', ['vendor:css', 'vendor:fonts']);

gulp.task('production', ['styles', 'scripts', 'vendor']);
