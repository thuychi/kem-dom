var gulp = require('gulp');
var minify = require('gulp-uglify');
var browserify = require('gulp-browserify');
var cleanCSS = require('gulp-clean-css');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

gulp.task('jsx', function(){
	return gulp.src('./asset/jsx/**/*.jsx')
		.pipe(babel())
		.pipe(gulp.dest('./asset/js/'));
});

gulp.task('js', ['jsx'], function(){
	return gulp.src([
		'./asset/js/phone/*.js',
		'./asset/js/tablet/*.js',
		'./asset/js/desktop/*.js'
		])
		.pipe(browserify())
		.pipe(gulp.dest('/home/thuychi/localhost/asset/js/'));
});

// gulp.task('module', function(){
// 	return gulp.src('./asset/js/module/**/*.js').pipe(gulp.dest('./node_modules/'));
// });

gulp.task('watch', function(){
	gulp.watch('./asset/jsx/run.js', ['js']);
});

gulp.task('default', ['js', 'watch']);