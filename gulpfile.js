var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-ruby-sass'),
    ts = require('gulp-typescript'),
    browserSync = require('browser-sync').create()
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps');

//Compile and Minify SASS/CSS
gulp.task('compile-minify-scss', function () {
    return sass('app/scss/**/*.scss', {
        style: 'compressed'
    })
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/Release/css'))
    .pipe(browserSync.stream());
});

//Minify JavaScript
gulp.task('minify-js', function () {
    gulp.src('app/js/**/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('build/Release/js'))
        .pipe(browserSync.stream());
});

//Compile TypeScript
gulp.task('compile-typescript', function () {
    gulp.src('app/typescript/**/*.ts')
        .pipe(ts({
            out: 'output.js'
        }))
    .pipe(gulp.dest('build/Release/js'))
    .pipe(browserSync.stream());
});

//Copy Pages
gulp.task('copy-pages', function () {
	gulp.src('app/pages/**/*html')
		.pipe(gulp.dest('build/Release'));
});

//Serve the content
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./build/Release"
        }
    });
});

//Watch and Serve
gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('app/scss/**/*.scss', ['compile-minify-scss']);
    gulp.watch('app/js/**/*.js', ['minify-js']);
    gulp.watch('app/typescript/**/*.ts', ['compile-typescript']);
    gulp.watch('app/pages/**/*.html', ['copy-pages']).on('change', browserSync.reload);
});

gulp.task('default', [
    'compile-minify-scss', 
    'minify-js', 
    'compile-typescript', 
	'copy-pages',
    'watch'
]);

gulp.task('deploy-to-iis', [
        'compile-minify-scss', 
        'minify-js', 
        'compile-typescript', 
        'copy-pages'
    ],function () {
        gulp.src('build/Release/**/*')
            .pipe(gulp.dest('C:/inetpub/www/TestSite'));
    }
);