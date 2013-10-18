var instructions = require('../instructions');
var question = require('../question');

var fs = require('fs');
var without = require('lodash.without');

module.exports = function(){
  instructions('Removing Packages', 'removing_packages');

  return question('{underline}Challenge{/underline}: Remove the package you installed with npm', function(data){
    if(typeof data[0] === 'string'){
      console.log(data[0]);
    }

    var modulesList = fs.existsSync('./node_modules') && fs.readdirSync('./node_modules');
    return !(modulesList && without(modulesList, '.bin').length);
  });
};
