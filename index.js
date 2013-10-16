require('./wrap-console');

var question = require('./question');

var fs = require('fs');

var sequence = require('when/sequence');

function question1(){
  var whatIsNpm = fs.readFileSync('./instructions/what_is_npm.txt', 'utf-8');
  console.log(whatIsNpm);

  return question('{underline}Challenge{/underline}: View commands available for npm.', 'npm help');
}

function question2(){
  var discoveringModules = fs.readFileSync('./instructions/discovering_modules.txt', 'utf-8');
  console.log(discoveringModules);

  return question('{underline}Challenge{/underline}: Search for lodash\'s pluck method on npm.', 'npm search lodash pluck');
}

function question3(){

}

sequence([
  question1,
  question2
]);
