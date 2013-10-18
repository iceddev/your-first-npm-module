var fs = require('fs');

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

module.exports = instructions;
