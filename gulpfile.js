// var gulp=require('gulp');
// var connect = require('gulp-connect');
// var less = require('gulp-less');
// var watch = require('gulp-watch');
// var uglify = require('gulp-uglify');
// var autoprefixer = require('gulp-autoprefixer');
// var cleancss = require('gulp-cleancss');
// var concat = require('gulp-concat');
// gulp.task("default",['less','uglify','watchjs','watchless'],function(){
// 	connect.server({
// 		root:'./',
// 		port:'8080'
// 	})
// });
// gulp.task('watchless',function(){
// 	gulp.watch('mobile/less/*.less',['less']);
// });
// gulp.task('watchjs',function(){
// 	gulp.watch('mobile/js/*.js',['uglify']);
// });
// gulp.task('less',function(){
// 	 gulp.src('mobile/less/*.less')
// 	 .pipe(less())
// 	 .pipe(autoprefixer())
// 	 .pipe(cleancss())
// 	 .pipe(concat('main.css'))
// 	 .pipe(gulp.dest('./mobile/css/'))
// });
// // gulp.task('uglify',function(){
// // 	gulp.src('mobile/js/*.js')
// // 	// .pipe(concat('main.js'))
// // 	.pipe(uglify())
// // 	.pipe(gulp.dest('./mobile/js/'))
// // })
var gulp=require('gulp');
var connect = require('gulp-connect');
var less = require('gulp-less');
var watch = require('gulp-watch');
// var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var cleancss = require('gulp-cleancss');
var concat = require('gulp-concat');
gulp.task("default",['less','watchless'],function(){
	connect.server({
		root:'./',
		port:'8080'
	})
});
gulp.task('watchless',function(){
	gulp.watch('mobile/less/*.less',['less']);
});
// gulp.task('watchjs',function(){
// 	gulp.watch('mobile/js/*.js',['uglify']);
// });
gulp.task('less',function(){
	 gulp.src('mobile/less/*.less')
	 .pipe(less())
	 .pipe(autoprefixer())
	 .pipe(cleancss())
	 // .pipe(concat('main.css'))
	 .pipe(gulp.dest('./mobile/css/'))
});
