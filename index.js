#!/usr/bin/env node

require('./wrap-console');

var question = require('./question');

var fs = require('fs');

var sequence = require('when/sequence');
var without = require('lodash.without');

function repeat(str, times){
  return new Array(times + 1).join(str);
}

function header(text){
  var bar = repeat('#', text.length + 4);
  console.log('{white}' + bar + '{/white}');
  console.log('{white}#{/white} {bold}' + text + '{/bold} {white}#{/white}');
  console.log('{white}' + bar + '{/white}');
}

function instructions(headerText, filename){
  header(headerText);
  console.log(fs.readFileSync(__dirname + '/instructions/' + filename + '.txt', 'utf-8'));
  console.log('{grey}Note: output may be formatted better when using npm commands outside this tutorial{/grey}');
}

function question1(){
  instructions('What is npm?', 'what_is_npm');

  return question('{underline}Challenge{/underline}: View commands available for npm', 'npm help');
}

function question2(){
  instructions('Detailed Help', 'detailed_help');

  return question('{underline}Challenge{/underline}: Use `npm help` to view detailed help about search', 'npm help search');
}

function question3(){
  instructions('Discovering Modules', 'discovering_modules');

  return question('{underline}Challenge{/underline}: Search for lodash\'s pluck method on npm', 'npm search lodash pluck');
}

function question4(){
  instructions('Getting Detailed Info', 'detailed_info');

  return question('{underline}Challenge{/underline}: Get detailed information on lodash.pluck', 'npm view lodash.pluck')
    .then(function(){
      return question('{underline}Challenge{/underline}: Get contributors information for lodash.pluck', 'npm view lodash.pluck contributors');
    });
}

function question5(){
  instructions('Installing Packages', 'installing_packages');

  return question('{underline}Challenge{/underline}: Install a package with npm', function(data){
    if(typeof data[0] === 'string'){
      console.log(data[0]);
    }

    var modulesList = fs.existsSync('./node_modules') && fs.readdirSync('./node_modules');
    return modulesList && without(modulesList, '.bin').length;
  });
}

function question6(){
  instructions('Removing Packages', 'removing_packages');

  return question('{underline}Challenge{/underline}: Remove the package you installed with npm', function(data){
    if(typeof data[0] === 'string'){
      console.log(data[0]);
    }

    var modulesList = fs.existsSync('./node_modules') && fs.readdirSync('./node_modules');
    return !(modulesList && without(modulesList, '.bin').length);
  });
}

sequence([
  question1,
  question2,
  question3,
  question4,
  question5,
  question6
]).then(function(){
  console.log('CONGRATS! You are all complete');
}, console.error.bind(console));
