var spawn = require('child_process').spawn;

var when = require('when');

function solution(command){
  if(!command){
    return;
  }
  command = command.split(' ');
  var cmd = command[0];
  var args = command.slice(1);

  if(cmd !== 'npm'){
    return;
  }

  var defer = when.defer();
  var result = '';
  spawn(cmd, args)
    .stdout
      .on('data', function(data){
        result += data.toString('utf-8');
      })
      .on('close', function(code){
        defer.resolve(result);
      });
  return defer.promise;
}

module.exports = solution;
