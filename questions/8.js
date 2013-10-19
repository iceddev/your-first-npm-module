var instructions = require('../instructions');
var question = require('../question');

var fs = require('fs');
var spawn = require('child_process').spawn;
var when = require('when');

module.exports = function(){
  instructions('Naming Your Package', 'naming_packages');

  return question('{underline}Challenge{/underline}: Find a name that isn\'t taken and modify your package.json (don\'t pass a command to verify)', function(data){
    if(data[0]){
      return false;
    }

    var pkgName = JSON.parse(fs.readFileSync('./package.json', 'utf-8')).name;
    var defer = when.defer();
    var result = '';
    var child = spawn('npm', ['view', pkgName]);
    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function(data){
      result += data;
    });
    child.on('close', function(code){
      defer.resolve(new RegExp('is not in the npm registry').test(result));
    });
    return defer.promise;
  });
};
