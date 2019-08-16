const gulp = require('gulp')
const imageMinified = require('gulp-imagemin')
const imageOptimized = require('gulp-image')

// IMAGE MINIFICATION => (pkg: gulp-imagemin)
gulp.task('imageMin', function () {
    gulp.src('./images/*')
        .pipe(imageMinified())
        .pipe(gulp.dest('./images-minified/'))
})

// IMAGE OPTIMIZATION => (pkg: gulp-image)
gulp.task('imageOpt', function () {
    gulp.src('./images/*')
        .pipe(imageOptimized())
        .pipe(gulp.dest('./images-optimized/'))
})

gulp.task('default', ['imageMin', 'imageOpt'])