// require gulp
var gulp = require('gulp');
var sass = require('gulp-sass');

// sass 
gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

// watc task
gulp.task('watch' , function(){
    gulp.watch('app/scss/**/*.scss' , gulp.series('sass'));
});

