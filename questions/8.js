var instructions = require('../instructions');
var question = require('../question');
var checkAvailable = require('../check-available');

module.exports = function(){
  instructions('Naming Your Package', 'naming_packages');

  return question('{underline}Challenge{/underline}: Find a name that isn\'t taken and modify your package.json (verify by not passing a command here)', function(data){
    if(data[0]){
      return false;
    }

    return checkAvailable()
      .then(function(result){
        return new RegExp('is not in the npm registry').test(result);
      });
  });
};
