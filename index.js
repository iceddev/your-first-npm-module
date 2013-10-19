#!/usr/bin/env node

require('./wrap-console');

var fs = require('fs');
var sequence = require('when/sequence');
var map = require('lodash.map');
var sortBy = require('lodash.sortby');

var questions = require('require-all')(__dirname + '/questions');

var header = require('./header');

var sortOrder = sortBy(Object.keys(questions), function(num){
  return parseInt(num, 10);
});

var sortedQuestions = map(sortOrder, function(num){
  return questions[num];
});

sequence(sortedQuestions).then(function(){
  header('CONGRATULATIONS!! You completed all the challenges!');
  fs.createReadStream(__dirname + '/fireworks.txt', 'utf-8').pipe(process.stdout);
}, console.error.bind(console));
