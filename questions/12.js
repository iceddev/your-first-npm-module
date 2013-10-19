var instructions = require('../instructions');
var question = require('../question');

var fs = require('fs');

module.exports = function(){
  instructions('Package Niceties', 'package_niceties');

  return question('{underline}Challenge{/underline}: Create a README.md with some information about your package', function(){
    return fs.existsSync('./README.md') && fs.readFileSync('./README.md', 'utf-8').length;
  }).then(function(){
    return question('{underline}Challenge{/underline}: Modify your package.json to have some sort of test (then run `npm test`)', 'npm test');
  });
};
