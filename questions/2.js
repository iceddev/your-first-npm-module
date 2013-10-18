var instructions = require('../instructions');
var question = require('../question');

module.exports = function(){
  instructions('Detailed Help', 'detailed_help');

  return question('{underline}Challenge{/underline}: Use `npm help` to view detailed help about search', 'npm help search');
};
