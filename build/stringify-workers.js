'use strict';

var path   =  require('path')
  , uglify =  require('uglify-js')
  , fs     =  require('fs')
  , workers = require('./workers')
  ;


function minify(code) {

    return     uglify.minify(code).code;
}

module.exports = function () {
  // 'php', 'xquery' not supported since they cannot be inlined even when minified before stringify
  workers.supported
    .forEach(function (worker) {
      var filename = worker.toLowerCase() + '.js';
      var file = path.join(__dirname, '..', 'workersrc', filename);
      var src = fs.readFileSync(file, 'utf-8');

      var dst = path.join(__dirname, '..', 'worker', filename);
      var stringified = JSON.stringify(minify(src));

      // need a String object here so we can attach extra props like src
      var code =  'module.exports.id = \'ace/mode/' + worker + '_worker\';\n'
                + 'module.exports.src = ' + stringified + ';';

      fs.writeFileSync(dst, code, 'utf-8');
    });
};

