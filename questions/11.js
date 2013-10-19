var instructions = require('../instructions');
var question = require('../question');

var fs = require('fs');

module.exports = function(){
  instructions('Package Dependencies', 'package_dependencies');

  return question('{underline}Challenge{/underline}: Install a dependency for your package and save it to your package.json', function(){
    var deps = JSON.parse(fs.readFileSync('./package.json', 'utf-8')).dependencies;
    return deps && Object.keys(deps).length;
  });
};
