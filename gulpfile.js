//Gulp.js Config
'use strict';
var
    //modules
    gulp = require('gulp');
    sass = require('gulp-sass');
    minifyHTML = require('gulp-minify-html');

    //development mode?
    devBuild = (process.env.NODE_ENV !== 'production'),

      // folders
  folder = {
    src: 'src/',
    build: 'build/'
  }
;

//tasks
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./main.css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('minify-html', function() {
    var opts = {comments:true,spare:true};

    gulp.src('./*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('./dist/'))
});
