var instructions = require('../instructions');
var question = require('../question');

var fs = require('fs');
var without = require('lodash.without');

module.exports = function(){
  instructions('Installing Packages', 'installing_packages');

  return question('{underline}Challenge{/underline}: Install a package with npm', function(data){
    if(typeof data[0] === 'string'){
      console.log(data[0]);
    }

    var modulesList = fs.existsSync('./node_modules') && fs.readdirSync('./node_modules');
    return modulesList && without(modulesList, '.bin').length;
  });
};
