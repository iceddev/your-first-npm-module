var instructions = require('../instructions');
var question = require('../question');
var checkAvailable = require('../check-available');

module.exports = function(){
  instructions('Publish Your Package', 'publish_packages');

  return question('{underline}Challenge{/underline}: Publish your package', function(data){
    return checkAvailable()
      .then(function(result){
        return !(new RegExp('is not in the npm registry').test(result));
      });
  });
};
