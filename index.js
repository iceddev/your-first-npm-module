#!/usr/bin/env node

require('./wrap-console');

var sequence = require('when/sequence');
var questions = require('require-all')(__dirname + '/questions');

sequence([
  questions.question1,
  questions.question2,
  questions.question3,
  questions.question4,
  questions.question5,
  questions.question6
]).then(function(){
  console.log('CONGRATS! You are all complete');
}, console.error.bind(console));
