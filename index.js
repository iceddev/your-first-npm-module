#!/usr/bin/env node

var Workshopper = require('workshopper');
var path = require('path');

Workshopper({
  name: 'your-first-npm-module',
  title: '',
  appDir: __dirname,
  // helpFile: path.join(__dirname, 'help.txt')
}).init();
