/*
 * grunt-px2rem
 * https://github.com/smilelegend/px2rem
 *
 * Copyright (c) 2015 whosesmile
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('px2rem', 'Convert px to rem for mobile html5 page', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', ',
      ignore0: true,
      ignore1: true,
      root: 32
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (f) {
      // Concat specified files.
      var src = f.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        }
        else {
          return true;
        }
      });

      var sources = src.map(function (filepath) {
        return grunt.file.read(filepath);
      }).join('\n').replace(/\b\d+px\b/ig, function (match) {
        if (options.ignore0 && '0px' === match.toLowerCase()) {
          return match;
        }
        if (options.ignore1 && '1px' === match.toLowerCase()) {
          return match;
        }
        return parseInt(match) / parseInt(options.root, 10) + 'rem';
      });

      // Write the destination file.
      grunt.file.write(f.dest, sources);

      // Print a success message.
      grunt.log.writeln('px2rem: ' + f.dest);
    });
  });

};