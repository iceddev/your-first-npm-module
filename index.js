#!/usr/bin/env node

require('./wrap-console');

var sequence = require('when/sequence');
var map = require('lodash.map');
var sortBy = require('lodash.sortby');

var questions = require('require-all')(__dirname + '/questions');

var sortOrder = sortBy(Object.keys(questions), function(num){
  return parseInt(num, 10);
});

var sortedQuestions = map(sortOrder, function(num){
  return questions[num];
});

sequence(sortedQuestions).then(function(){
  console.log('CONGRATS! You are all complete');
}, console.error.bind(console));
