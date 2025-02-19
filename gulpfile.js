const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename');

gulp.task('build', () => {
  return gulp.src('src/aurastyles.scss') // Only the main file
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('dist')) // Save normal CSS
    .pipe(postcss([cssnano()])) // Minify
    .pipe(rename({ suffix: '.min' })) // Rename to .min.css
    .pipe(gulp.dest('dist')); // Save minified CSS
});
