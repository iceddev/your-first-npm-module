var fs = require('fs');
var spawn = require('child_process').spawn;

var when = require('when');

function checkAvailable(){
  var pkgName = JSON.parse(fs.readFileSync('./package.json', 'utf-8')).name;
  var defer = when.defer();
  var result = '';
  var cmd = 'npm';
  var args = ['view', pkgName];
  if(process.platform === 'win32'){
    args.unshift('/c', cmd);
    cmd = 'cmd';
  }
  var child = spawn(cmd, args);
  child.stderr.setEncoding('utf8');
  child.stderr.on('data', function(data){
    result += data;
  });
  child.on('close', function(code){
    defer.resolve(result);
  });
  return defer.promise;
}

module.exports = checkAvailable;
