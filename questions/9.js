var instructions = require('../instructions');
var question = require('../question');

var fs = require('fs');
var semver = require('semver');

module.exports = function(){
  instructions('Versioning Packages', 'versioning_packages');

  return question('{underline}Challenge{/underline}: Verify your package.json has a valid semver', function(){
    var version = JSON.parse(fs.readFileSync('./package.json', 'utf-8')).version;
    return semver.valid(version);
  });
};
