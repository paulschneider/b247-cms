var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var path = require('path');
var uglify = require('gulp-uglify');
var util = require('util');

var jsDir = 'app/assets/js';
var targetJsDir = '/public/js';
var cssDir = 'app/assets/css';
var targetCssDir = 'public/css';
var targetLessDir = 'public/css';

gulp.task('less', function () {
  gulp.src(cssDir + '/style.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'lib', 'bootstrap') ]
      ,compress: true
    }))
    .pipe(gulp.dest(targetLessDir))
    .pipe(notify({ message : targetLessDir + "/style.less compiled" }));
});

gulp.task('js', function(){
        gulp.src(jsDir + '/*.js')
        .pipe(browserify( { debug : true     } ))
        .pipe(uglify())
        .pipe(rename(targetJsDir + '/min.js'))
        .pipe(gulp.dest('./'))
        .pipe(notify({ message : targetJsDir + "/bundle.js compiled" }));
});

gulp.task('watch', function(){
    gulp.watch(cssDir + '/**/*.less', ['less']);
    gulp.watch(jsDir + '/lib/*.js', ['js']);
});

gulp.task('default', ['watch']);
