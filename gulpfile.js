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
// 开启服务器
gulp.task("default",['studentLess','teacherLess','watchless'],function(){
	connect.server({
		root:'./',
		port:'8080'
	})
});
// 监听less
gulp.task('watchless',function(){
	gulp.watch('mobile/studentLess/*.less',['studentLess']); //监听less
	gulp.watch('mobile/teacherLess/*.less',['teacherLess']); 
});

// 压缩js
// gulp.task('watchjs',function(){
// 	gulp.watch('mobile/js/*.js',['uglify']);
// });

// less编译
gulp.task('studentLess',function(){
	 gulp.src('mobile/studentLess/*.less')
	 .pipe(less())  //less编译
	 .pipe(autoprefixer()) //自动补全
	 .pipe(cleancss()) //压缩css
	 // .pipe(concat('main.css'))
	 .pipe(gulp.dest('./mobile/studentCss/'))
});
gulp.task('teacherLess',function(){
	 gulp.src('mobile/teacherLess/*.less')
	 .pipe(less())
	 .pipe(autoprefixer())
	 .pipe(cleancss())
	 // .pipe(concat('main.css'))  //合并文件
	 .pipe(gulp.dest('./mobile/teacherCss/'))
});
