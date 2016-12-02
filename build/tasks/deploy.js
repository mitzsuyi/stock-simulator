var gulp = require('gulp');
var paths = require('../paths');
var runSequence = require('run-sequence');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var runSequence = require('run-sequence');

gulp.task('clean-deploy', function() {
  return gulp.src([paths.deploy + "/jspm_packages",
    paths.deploy + "/dist", paths.deploy + "styles",
    paths.deploy + "/config.js"
    ])
    .pipe(vinylPaths(del));
});

var deploy_files = [
  paths.export + "**/*"
]

gulp.task('deploy', function () {
  return gulp.src(deploy_files)
    .pipe(gulp.dest(paths.deploy));
});


gulp.task('deploy-production', function(callback){
  return runSequence(
    'export',
    'clean-deploy',
    'deploy',
    callback
  );
})
