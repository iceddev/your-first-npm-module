var spawn = require('child_process').spawn;

var when = require('when');

function solution(command){
  if(!command){
    return;
  }
  command = command.split(' ');
  var cmd = command[0];
  if(cmd !== 'npm'){
    return;
  }

  var args = command.slice(1);
  if(process.platform === 'win32'){
    args.unshift('/c', cmd);
    cmd = 'cmd';
  }

  var defer = when.defer();
  var result = '';
  var child = spawn(cmd, args);
  child.stdout.setEncoding('utf8');
  child.stderr.setEncoding('utf8');
  child.stdout
    .on('data', function(data){
      result += data.toString('utf-8');
    })
    .on('close', function(code){
      defer.resolve(result);
    });
  return defer.promise;
}

module.exports = solution;
