var instructions = require('../instructions');
var question = require('../question');
var solution = require('../solution');

var fs = require('fs');
var spawn = require('child_process').spawn;
var when = require('when');

module.exports = function(){
  instructions('Npm Users', 'npm_users');

  return question('{underline}Challenge{/underline}: Check if you already have an npm user', 'npm whoami')
    .then(function(){
      return solution('npm whoami')
        .then(function(user){
          if(new RegExp('npm adduser').test(user)){
            return question('{underline}Challenge{/underline}: Create an npm user', function(data){
              return solution('npm whoami')
                .then(function(user){
                  return !(new RegExp('npm adduser').test(user));
                });
            });
          } else {
            return true;
          }
        });
    });
};
