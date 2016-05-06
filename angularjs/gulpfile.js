var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var cleancss = require('gulp-cleancss');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var copy = require('gulp-copy');

var config = {
    coreJs: [
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
        './node_modules/angular/angular.js'
    ],
    appJs: [],
    coreCss: [],
    appCss:[
        './sass/core.scss',
        './sass/app.scss'
    ],
    copyImg: [
        './node_modules/icheck/skins/square/yellow*.png',
    ],
    copyFonts: [
        './node_modules/bootstrap-sass/assets/fonts/bootstrap/**/*.*',
        './node_modules/font-awesome/fonts/**/*.*',
    ],
    copyViews: [
        './apps/**/*.html'
    ]
};

gulp.task('coreJs', function() {
    return gulp.src(config.coreJs)
        .pipe(concat('core.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/assets/js'));
});

gulp.task('sass', function () {
    return gulp.src(config.appCss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('copyImg', function () {
    return gulp.src(config.copyImg)
        .pipe(gulp.dest('./public/assets/img'));
});

gulp.task('copyFonts', function () {
    return gulp.src(config.copyFonts)
        .pipe(gulp.dest('./public/assets/fonts'));
});

gulp.task('copyViews', function () {
    return gulp.src(config.copyViews)
        .pipe(gulp.dest('./public/views'));
});

gulp.task('default', ['coreJs', 'sass', 'copyImg', 'copyFonts', 'copyViews']);