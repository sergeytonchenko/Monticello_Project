// Подключение пакетов
let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let scss = require('gulp-sass');
let plumber = require('gulp-plumber');
let notify = require('gulp-notify');
let autoprefixer = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');
let pug = require('gulp-pug');
let del = require('del');



// Задачи
gulp.task('clean:build', function() {
    return del('./build');
});

gulp.task('server', function() {
    browserSync.init({
    	server: {baseDir: './build/'}
    });

    gulp.watch('src/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('src/sass/**/*.scss', gulp.series('scss'));
    gulp.watch('src/js/**/*.js', gulp.series('copy:js'));
    gulp.watch('src/img/**/*.*', gulp.series('copy:img'));

});

gulp.task('copy:js', function() {
    return gulp.src('src/js/**/*.js')
    	.pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream());
});

gulp.task('copy:img', function() {
    return gulp.src('src/img/**/*.*')
    	.pipe(gulp.dest('./build/img'))
		.pipe(browserSync.stream());
});

gulp.task('scss', function() {
    return gulp.src('./src/sass/main.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function(err){
                return {
                    title: 'Styles',
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(scss())
        .pipe( autoprefixer({
    		browsers: ['last 6 versions'],
    		cascade: false
        }) )
        .pipe(sourcemaps.write())	    
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());        	    
});

gulp.task('pug', function() {
    return gulp.src('./src/pug/**/*.pug')
	    .pipe(plumber({
	    	errorHandler: notify.onError(function(err){
	    		return {
	    			title: 'Pug',
	    			message: err.message
	    		}
	    	})
	    }))
	    .pipe(pug({
	    	pretty: true
	    }))
	    .pipe(gulp.dest('./build'))
		.pipe(browserSync.stream());
});

gulp.task('default', gulp.series('clean:build', 'scss', 'pug', 'copy:js', 'copy:img', 'server'));


