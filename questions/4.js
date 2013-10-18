var instructions = require('../instructions');
var question = require('../question');

module.exports = function(){
  instructions('Getting Detailed Info', 'detailed_info');

  return question('{underline}Challenge{/underline}: Get detailed information on lodash.pluck', 'npm view lodash.pluck')
    .then(function(){
      return question('{underline}Challenge{/underline}: Get contributors information for lodash.pluck', 'npm view lodash.pluck contributors');
    });
};
