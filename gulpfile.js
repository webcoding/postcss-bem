var gulp = require('gulp');
var watchMode = false;

gulp.task('lint', function () {
    var eslint = require('gulp-eslint');
    var stream = gulp.src(['index.js', 'test/*.js', 'gulpfile.js'])
        .pipe(eslint())
        .pipe(eslint.format());
    if(!watchMode){
        return stream.pipe(eslint.failAfterError());
    }else{
        return stream;
    }
});

gulp.task('test', function () {
    var mocha = require('gulp-mocha');
    return gulp.src('test/*.js', { read: false }).pipe(mocha());
});


gulp.task('watch', function () {
    watchMode = true;
    return gulp.watch(['index.js', 'test/*.js', 'test/fixtures/*.*'], ['lint', 'test']);
});

gulp.task('default', ['lint', 'test']);
