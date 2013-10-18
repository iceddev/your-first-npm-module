var readline = require('readline');

var when = require('when');

var solution = require('./solution');
var attempt = require('./attempt');

var successMessage = '{blue}{bold}Challenge Completed{/bold}{/blue}';
var failureMessage = '{red}{bold}Try Again{/bold}{/red}';

function question(text, expectedCmd, success){
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('SIGINT', function() {
    rl.question('Are you sure you want to exit (y/N)? ', function(answer) {
      if(answer.match(/^y(es)?$/i)){
        rl.close();
      } else {
        console.log(text);
        rl.prompt();
      }
    });
  });

  var defer = when.defer();

  var expected = when.resolve();
  if(typeof expectedCmd === 'string'){
    expected = solution(expectedCmd);
  } else {
    success = expectedCmd;
  }

  success = success || function(data){
    return data[0] === data[1];
  };

  console.log(text);
  rl.prompt();
  rl.once('line', function(cmd){
    rl.close();
    when.join(attempt(cmd), expected)
      .then(success)
      .then(function(passed){
        if(passed){
          console.log(successMessage);
          defer.resolve();
        } else {
          console.log(failureMessage);
          when(question(text, expectedCmd, success), defer.resolve);
        }
      });
  });

  return defer.promise;
}

module.exports = question;
