'use strict';
/**
 * 源自 gulp-concat (🚫暂未使用)
 * @description 由于原 gulp-concat 合并文件后，输出的文件路径 和 gulp.src的 base属性不一致
 * @example `.pipe(concat('index.js', { basePath(files) { return 'scripts' } }))`
 */

var through = require('through2');
var path = require('path');
var File = require('vinyl');
var Concat = require('concat-with-sourcemaps');

// file can be a vinyl file object or a string
// when a string it will construct a new one
module.exports = function (file, opt) {
  if (!file) {
    throw new Error('gulp-concat: Missing file option');
  }
  opt = opt || {};

  // to preserve existing |undefined| behaviour and to introduce |newLine: ""| for binaries
  if (typeof opt.newLine !== 'string') {
    opt.newLine = '\n';
  }

  var isUsingSourceMaps = false;
  var latestFile;
  var latestMod;
  var fileName;
  var concat;
  var files = []; //! 存储所有文件

  if (typeof file === 'string') {
    fileName = file;
  } else if (typeof file.path === 'string') {
    fileName = path.basename(file.path);
  } else {
    throw new Error('gulp-concat: Missing path in file options');
  }

  function bufferContents(file, enc, cb) {
    // ignore empty files
    if (file.isNull()) {
      cb();
      return;
    }

    // we don't do streams (yet)
    if (file.isStream()) {
      this.emit('error', new Error('gulp-concat: Streaming not supported'));
      cb();
      return;
    }

    //! 收集所有文件
    files.push(file.path);

    // enable sourcemap support for concat
    // if a sourcemap initialized file comes in
    if (file.sourceMap && isUsingSourceMaps === false) {
      isUsingSourceMaps = true;
    }

    // set latest file if not already set,
    // or if the current file was modified more recently.
    if (!latestMod || file.stat && file.stat.mtime > latestMod) {
      latestFile = file;
      latestMod = file.stat && file.stat.mtime;
    }

    // construct concat instance
    if (!concat) {
      concat = new Concat(isUsingSourceMaps, fileName, opt.newLine);
    }

    // add file to concat instance
    concat.add(file.relative, file.contents, file.sourceMap);
    cb();
  }

  function endStream(cb) {
    // no files passed in, no file goes out
    if (!latestFile || !concat) {
      cb();
      return;
    }

    var joinedFile;

    // if file opt was a file path
    // clone everything from the latest file
    if (typeof file === 'string') {
      joinedFile = latestFile.clone({ contents: false });
      //! 重写文件输出路径
      // joinedFile.path = path.join(latestFile.base, file);
      joinedFile.path = path.join(latestFile.base, path.join(
        typeof opt.basePath === 'function' ? (opt.basePath(files) || '') : opt.basePath || '',
        file
      ));
    } else {
      joinedFile = new File(file);
    }

    joinedFile.contents = concat.content;

    if (concat.sourceMapping) {
      joinedFile.sourceMap = JSON.parse(concat.sourceMap);
    }

    this.push(joinedFile);
    cb();
  }

  return through.obj(bufferContents, endStream);
};
