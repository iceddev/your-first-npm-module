var instructions = require('../instructions');
var question = require('../question');

module.exports = function(){
  instructions('What is npm?', 'what_is_npm');

  return question('{underline}Challenge{/underline}: View commands available for npm', 'npm help');
};
