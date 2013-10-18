var instructions = require('../instructions');
var question = require('../question');

module.exports = function(){
  instructions('Discovering Modules', 'discovering_modules');

  return question('{underline}Challenge{/underline}: Search for lodash\'s pluck method on npm', 'npm search lodash pluck');
};
