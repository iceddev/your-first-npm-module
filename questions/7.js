var instructions = require('../instructions');
var question = require('../question');

var fs = require('fs');

module.exports = function(){
  instructions('Creating Packages', 'creating_packages');

  return question('{underline}Challenge{/underline}: Scaffold a package.json with npm', function(){
    return fs.existsSync('./package.json');
  });
};
