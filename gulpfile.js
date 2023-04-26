'use strict';

// Load plugins
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const browserSync = require('browser-sync').create();

// Compile scss into css/ add vendor prefixes/ compress css
function style() {
    return gulp
        .src('src/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
}

// Watch files
function watch() {
    browserSync.init({
        server: {
            baseDir: './',
            index: 'index.html',
        },
    });
    gulp.watch('src/scss/**/*.scss', style);
    gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

// Export tasks
exports.style = style;
exports.watch = watch;
