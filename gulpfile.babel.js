/**
 *
 *
 *  This has been converted into my framework from WSK
 *  Not a lot is the same but I've kept the concept of WSK
 *
 */

import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';
import autoprefixer from 'autoprefixer';

const $ = gulpLoadPlugins();

// Compile and automatically prefix stylesheets, postCSS can be reviewed for less than modern browser fall backs
gulp.task('styles', () => {
  // For best performance, don't add Sass partials to `gulp.src` just globby glob it
  //Using postCSS cause it's p cool, right now just using autoprefixer after Sass is compiled
  return gulp.src([
    'app/styles/**/*.scss',
    'app/styles/**/*.css'
  ])
    .pipe($.changed('.tmp/styles', {extension: '.css'}))
    //Source maps work in Chrome to let you see what partial is being fetched
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      outputStyle: 'expanded'
    }).on('error', $.sass.logError))
    .pipe($.postcss([autoprefixer()]))
    .pipe($.sourcemaps.write('./dist'))
    .pipe(gulp.dest('dist/styles'))
    .pipe($.size({title: 'styles'}));
});

gulp.task('scripts', () => {
  return gulp.src([
    'app/scripts/**/*.js'
  ])
    .pipe(gulp.dest('dist/scripts'))
    .pipe($.size({title: 'scripts'}));
});

// Clean output directory (dist/temp)
gulp.task('clean', cb =>
  del(['.tmp', 'dist/*', '!dist/.git'],
  {dot: true}, cb));

// Watch files for changes & reload
gulp.task('serve', () => {
  runSequence('default');
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  //Each watch task is specific to how to control the direction of tasks
  gulp.watch('app/styles/**/*.scss', ['styles']);
  //Watch index for any changes to landing page and run scripts
  gulp.watch('index.html', ['default']);
});

// Build production files, the default task
gulp.task('default', ['clean'], () => {
  runSequence(
    'styles',
  'scripts'
  );
});
