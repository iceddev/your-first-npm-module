var fs = require('fs');

var header = require('./header');

function instructions(headerText, filename){
  header(headerText);
  console.log(fs.readFileSync(__dirname + '/instructions/' + filename + '.txt', 'utf-8'));
}

module.exports = instructions;
