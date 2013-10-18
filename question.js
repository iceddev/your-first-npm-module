var readline = require('readline');

var when = require('when');

var solution = require('./solution');

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
    if(typeof data[0] === 'string'){
      console.log(data[0]);
    }

    return data[0] === data[1];
  };

  console.log(text);
  rl.prompt();
  rl.on('line', function(cmd){
    when.join(solution(cmd), expected)
      .then(success)
      .then(function(passed){
        if(passed){
          console.log(successMessage);
          rl.close();
          defer.resolve();
        } else {
          console.log(failureMessage);
          console.log(text);
          rl.prompt();
        }
      });
  });

  return defer.promise;
}

module.exports = question;
