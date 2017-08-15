// 引入组件
var gulp = require('gulp'),                    // 引入Gulp
	minifycss = require('gulp-minify-css'),    // css压缩
	uglify = require('gulp-uglify'),        // js压缩
	concat = require('gulp-concat'),        // 文件合并
	rename = require('gulp-rename'),        // 文件更名
	less = require('gulp-less'),            // less2css
	notify = require('gulp-notify'),        // 提示信息
	runSequence = require('run-sequence'), // 重命名 hash
	rev = require('gulp-rev'),
	revCollector = require('gulp-rev-collector');

// TODO hash命名，缓存处理
// less to css
gulp.task('less2css', function () {
	return    gulp.src('static/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('dist/css'))
		.pipe(notify({ message: 'less2css task ok' }));
});

// 合并、压缩、重命名css
gulp.task('css', function() {
	return    gulp.src('static/css/*.css')
		.pipe(concat('main.css'))
		.pipe(gulp.dest('dist/css'))
		.pipe(rename({ suffix: `.min_${new Date().getTime()}`}))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/css'))
		.pipe(notify({ message: 'css task ok' }));
});

// 合并、压缩js文件
gulp.task('js', function() {
	return gulp.src('static/js/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(rename({ suffix: `.min_${new Date().getTime()}`}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(notify({ message: 'js task ok' }));
});

// 默认任务
gulp.task('default', function() {

	gulp.run('less2css', 'css', 'js');

//  // Watch .css files
//  gulp.watch('src/css/*.css', ['css']);
//
//  // Watch .js files
//  gulp.watch('src/js/*.js', ['js']);

});

//定义一个testLess任务（自定义任务名称）
//gulp.task('testLess', function () {
//    gulp.src('src/less/index.less') //该任务针对的文件
//        .pipe(less()) //该任务调用的模块
//        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
//});
//
//gulp.task('default',['testLess']); //定义默认任务