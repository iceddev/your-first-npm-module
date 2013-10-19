var instructions = require('../instructions');
var question = require('../question');

var fs = require('fs');
var spawn = require('child_process').spawn;
var when = require('when');

module.exports = function(){
  instructions('Publish Your Package', 'publish_packages');

  return question('{underline}Challenge{/underline}: Publish your package', function(data){
    var pkgName = JSON.parse(fs.readFileSync('./package.json', 'utf-8')).name;
    var defer = when.defer();
    var result = '';
    var child = spawn('npm', ['view', pkgName]);
    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function(data){
      result += data;
    });
    child.on('close', function(code){
      defer.resolve(!(new RegExp('is not in the npm registry').test(result)));
    });
    return defer.promise;
  });
};
