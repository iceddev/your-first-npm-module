var readline = require('readline');

var when = require('when');

var solution = require('./solution');

var success = '{blue}{bold}Challenge Comleted{/bold}{/blue}';
var failure = '{red}{bold}Try Again{/bold}{/red}';


function question(text, expectedCmd){
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  var defer = when.defer();

  console.log(text);
  rl.prompt();
  rl.on('line', function(cmd){
    when.join(solution(cmd), solution(expectedCmd))
      .then(function(data){
        console.log(data[0]);

        if(data[0] === data[1]){
          console.log(success);
          rl.close();
          defer.resolve();
        } else {
          console.log(failure);
          rl.prompt();
        }
      });
  });

  return defer.promise;
}

module.exports = question;
